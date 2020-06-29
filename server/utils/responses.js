const responseMsg = require('../constants/httpMessages');
const httpCodes = require('../constants/httpCodes');

class Responses {

    static success(res, data) {
        res.status(httpCodes.CODE_OK)
            .json({
                status: responseMsg.MESSAGE_SUCCESS,
                data: data
            });
    }

    static created(res, data, message) {
        res.status(httpCodes.CODE_CREATED)
            .json({
                status: responseMsg.MESSAGE_CREATED,
                data: data
            });
    }
    
    static noContent(res) {
        res.status(httpCodes.CODE_NO_CONTENT)
            .json({
                status: responseMsg.MESSAGE_NO_CONTENT
            });
    }

    static badRequest(res, message) {
        res.status(httpCodes.CODE_BAD_REQUEST)
            .json({
                status: responseMsg.MESSAGE_ERROR,
                message: message
            });
    }

    static forbidden(res, message) {
        res.status(httpCodes.CODE_FORBIDDEN)
            .json({
                status: responseMsg.MESSAGE_FORBIDDEN,
                message: message
            });
    }

    static internalError(res, message) {
        res.status(httpCodes.CODE_INTERNAL_ERROR)
            .json({
                status: responseMsg.MESSAGE_INTERNAL_ERROR,
                message: message
            });
    }
}

module.exports = Responses;