const User = require('../models/user.model');

exports.signup = async (req, res, next) => {
    try {
        const { name, accountNumber, password } = req.body;

        const user = await User.create({
            name,
            accountNumber,
            password,
        });

        return res.status(201).json({
            status: 'success',
            message: 'The user and account was created successfull',
        });


    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong',
            error,
        });
    }
};

exports.login = async (req, res, next) => {
    return res.status(201).json({
        status: 'success',
        message: 'hello form login route',
    });
};