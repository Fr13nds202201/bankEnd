const Transfers = require('../models/transfer.model');

exports.transferencia = async (req, res, next) => {

    try {
        const { amount, senderUserId, receiverUserId } = req.body;
        const transfer = await Transfers.create({
            amount,
            senderUserId,
            receiverUserId,
        });

        return res.status(200).json({
            status: 'success',
            message: 'transfers was successfully',
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'something error',
        })
    }


}


exports.deposito = async (req, res, next) => {
    return res.status(201).json({
        status: 'success',
        message: 'hello form of transfer',
    });
};