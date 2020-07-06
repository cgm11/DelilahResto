const joi = require('@hapi/joi');
const messages = require('../constants/messages');
const ResponseUtil = require('../utils/responses');

const validateCreateOrder = (req, res, next) => {
    try {
        const objectSchema = joi.object({
            id: joi.number().required(),
            quantity: joi.number().required()
        });

        const schema = joi.object({
            paymentMethodId: joi.number().required(),
            userId: joi.number().required(),
            userType: joi.number().required(),
            products: joi.array().items(objectSchema).min(1).unique().required()
        })

        const correctReq = schema.validate(req.body);

        if (correctReq.error) return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) { ResponseUtil.internalError(res, messages.MESSAGE_ERROR); }    
}

const validateUpdateOrder = (req, res, next) => {
    try {
        const id = joi.number().required();
        const statusOrderId = joi.number().required();        
        const correctid = id.validate(req.params.id);
        const correctStatusOrderId = statusOrderId.validate(req.body.statusOrderId);
        if (correctid.error) return ResponseUtil.badRequest(res, correctid.error.message);
        if (correctStatusOrderId.error) return ResponseUtil.badRequest(res, correctStatusOrderId.error.message);
        next();
    } catch (error) {
        ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    }
};

module.exports = {
    validateCreateOrder,
    validateUpdateOrder
}