const { CODE_BAD_REQUEST } = require("./httpCodes");

module.exports = {
    INVALID_CREDENTIALS: 'Please check username or password',
    MESSAGE_ERROR: 'An error occurred, please try again.',
    ERROR_AUTHORIZATION: `Session expired or user don't have permissions to access`,
    ERROR: 'error',
    EMPTY_TOKEN: 'token has to be included',
    DENIED: 'User is not allowed to do that',
    INVALID_PRODUCT_ID: `Please check order, because one or more products doesn't exist`,
    INVALID_ID: `Id doesn't exist`
}