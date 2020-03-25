
exports.up = function(knex) {//metodo para execução normal
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();//atributo chave primaria; string pois o id será gerado por nós
    table.string('name').notNullable();//atributo nome
    table.string('email').notNullable();//...
    table.string('whatsapp').notNullable();//...
    table.string('city').notNullable();//...
    table.string('uf', 2).notNullable();//..., parametro 2 pois campo sempre terá 2 caracteres
  });
};

exports.down = function(knex) {//metodo para caso dê algum erro
  return knex.schema.dropTable('ongs');
};
