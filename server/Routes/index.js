const auth = require('./userAuth');
const user = require('./user');

const authenticate = require("../middlewares/authenticate_user");

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "Welcome to the AUTHENTICATION API. Register or Login to test Authentication."});
    });

    app.use('/api/auth', auth);
    app.use('/api/user', authenticate,user);
};