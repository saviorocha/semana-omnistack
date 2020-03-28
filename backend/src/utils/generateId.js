const crypto = require('crypto');

module.exports = function generateId() {
    return crypto.randomBytes(4).toString('HEX');//gera 4 bytes de caracteres hexadecimais de forma aleatoria para criar o id
}