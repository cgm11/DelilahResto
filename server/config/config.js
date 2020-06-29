
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const JSON_ENV_VARIABLES  = require("./envVariables.json");
const NODE_ENV = process.env.NODE_ENV || "development";
const ENV_VARIABLES = JSON_ENV_VARIABLES[NODE_ENV];

module.exports = {
    PORT: ENV_VARIABLES.PORT,
    USER_DB: ENV_VARIABLES.USER_DB,
    PASS_BD: ENV_VARIABLES.PASS_BD,
    HOST_BD: ENV_VARIABLES.HOST_BD,
    PORT_BD: ENV_VARIABLES.PORT_BD,
    NAME_BD: ENV_VARIABLES.NAME_BD,
    DIALECT_DB: ENV_VARIABLES.DIALECT_DB
};