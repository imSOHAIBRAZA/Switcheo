const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require("../database/models/userModel");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            var d=new Date(jwt_payload.exp);
            console.log(d,jwt_payload.exp,Date.now())
            if(jwt_payload.exp>Date.now())
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) return done(null, user);
                    return done(null, false);
                })
                .catch(err => {
                    return done(err, false, {message: 'Server Error'});
                });
                else
                return done ({status:403,message:"token expired login please"},false,{message:"token expired"});
        })
    );
};