const User = require("../database/models/userModel");

const mailgun=require("mailgun-js")

const Token = require("../database/models/token");


exports.register = (req, res) => {
    // Make sure this account doesn't already exist
    User.findOne({email: req.body.email})
        .then(user => {

            if (user) return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});

            // Create and save the user
            console.log(req.body)
            const newUser = new User(req.body);
            newUser.save()
                .then(user =>{
                    console.log(user)
                    res.status(200).json({token: user.generateJWT(), user: user});
                    sendEmail(user, req)
                }
                     )
                .catch(err =>{
                    console.log(err)
                    res.status(500).json({message:err.message})});
        })
        .catch(err => res.status(500).json({success: false, message: err.message}));
};


exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) return res.status(401).json({message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

            //validate password
            if (!user.comparePassword(req.body.password)) return res.status(401).json({message: 'Invalid email or password'});

            
            res.status(200).json({token: user.generateJWT(), user: user});
        })
        .catch(err => res.status(500).json({message: err.message}));
};


exports.verify = function (req, res) {
    if(!req.params.token) return res.status(400).json({message: "We were unable to find a user for this token."});

    // Find a matching token
    Token.findOne({ token: req.params.token }, (err, token) => {
        if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user
        User.findOne({ _id: token.userId }, (err, user) => {
            if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });

            if (user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) return res.status(500).json({message:err.message});

                res.status(200).send("The account has been verified. Please log in.");
            });
        });

    });
};

exports.resendToken = function (req, res, next) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) return res.status(401).json({ message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

        if (user.isVerified) return res.status(400).json({ message: 'This account has already been verified. Please log in.'});

        sendEmail(user, req, res);
    });
};


function sendEmail(user, req ){
    const token = user.generateVerificationToken();

    // Save the verification token
    token.save( async function (err) {
        if (err) return res.status(500).json({ message: err.message });

        let link="http://"+req.headers.host+"/api/auth/verify/"+token.token;

        const mg = mailgun({apiKey: process.env.mailgun_apikey , domain: process.env.mailgun_domain});
        const data = {
            from: 'Excited User <support@sandbox506fae95d52249209934df3b35e0251b.mailgun.org>',
            to: user.email,
            subject: 'verify email',
            text: `Hi ${user.firstName} \n 
                    Please click on the following link ${link} to verify your account. \n\n 
                    If you did not request this, please ignore this email.\n`,
        };
        mg.messages().send(data, function (error, body) {
            if(error) return console.log(error)
            console.log(body);
        });
    });
}