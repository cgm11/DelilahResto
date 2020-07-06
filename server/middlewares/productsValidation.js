const joi = require('@hapi/joi');
const messages = require('../constants/messages');
const ResponseUtil = require('../utils/responses');

const validateCreateAndUpdateReq = (req, res, next) => {
    try {
        const schema = joi.object({
            name: joi.string().min(3).required(),
            price: joi.number().required(),
            image: joi.optional(),
            userId: joi.optional(),
            userType: joi.optional()
        });
        const correctReq = schema.validate(req.body);

        if (correctReq.error)
            return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) { ResponseUtil.internalError(res, messages.MESSAGE_ERROR); }
}

const validateDeleteReq = (req, res, next) => {
    try {
        const schema = joi.number().required();
        const correctReq = schema.validate(req.params.id);
        if (correctReq.error)
            return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) {
        ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    }
};

module.exports = {
    validateCreateAndUpdateReq,
    validateDeleteReq
}