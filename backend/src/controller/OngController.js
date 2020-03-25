const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');//gera 4 bytes de caracteres hexadecimais de forma aleatoria para criar o id

        await connection('ongs').insert({//como a inserção pode demora, adiciona-se async e await para retornar a resposta apenas quando a operação terminar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });//retorna-se o id pois a ong precisará dele para entrar na aplicação

    }
}