
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();//chave primaria criada pelo banco
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();//relacionamento do incidente

        table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
