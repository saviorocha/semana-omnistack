const connection = require('../database/connection');
module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;//esquema de paginação. Mostra apenas 5 casos por vez(começa da pagina 1 por padrão)

        const [count] = await connection('incidents').count();//total de casos

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//juntando dados das duas tabelas
            .limit(5)
            .offset((page - 1) * 5)
            .select('incidents.*',
                'ongs.name', 'ongs.email',
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf');
        
        response.header('X-Total-Count', count['count(*)']);//retornando o total de casos pelo cabeçalho do GET com o nome de X-Total-Count
        return response.json(incidents);
    },

    async create (request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({//[id] -> função retorna um array com os dados e a primeira posição é o id. Essa parte ([id]) passa a primeira posição do array para a variavel id
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;//busca-se esse id para confirmar se a ong que quer deletar o incidente realmente é a ong correta
        const incident = await connection('incidents')
            .where('id', id)//where 'id' = id
            .select('ong_id')//select coluna ong_id
            .first();

        if (incident.ong_id != ong_id) {//se o id não é o certo
            return response.status(401).json({ error: "Operation not permitted" });//401 -> não autorizado
        }

        await connection ('incidents')
            .where('id', id)
            .delete();
        return response.status(204).send();//204 -> resposta bem sucedida que não retorna nenhum conteúdo
    }
}