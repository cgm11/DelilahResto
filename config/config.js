//const path = require('path');

//process.env.URI = 'http';
const userBD = "root";
const passBD = "";
const hostBD = "localhost";
const portBD = "3306";
const nameBD = "delilahresto"

module.exports = {
    PORT: 3000,
    URLBD: `mysql://${userBD}:${passBD}@${hostBD}:${portBD}/${nameBD}`
};