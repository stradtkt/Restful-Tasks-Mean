const User = require('mongoose').model('User');

module.exports = {
    login(req, res) {
        const { email, password } = req.body;
        User.findOne({email})
            .then(user => {
                if(!user) {throw Error();}
                return User.validatePassword(password, user.password)
                    .then(() => {
                        completeLogin(req, res, user);
                    });
            })
            .catch(error => {
                res.status(403).json({error:' user/pass is not found'})
            });
    },
    register(req, res) {
        User.create(req.body)
            .then(user => {
                completeLogin(req, res, user);
            })
    },
    logout(req, res) {
        req.session.destroy();
        res.clearCookie('user_id');
        res.clearCookie('expiration');
        res.json(true);
    },
}

function completeLogin(req, res, user) {
    req.session.user = user.toObject();
    delete req.session.user.password;
    res.cookie('userID', user._id.toString());
    res.cookie('expiration', Date.now() + 86400 * 1000);
    res.json(user);
}