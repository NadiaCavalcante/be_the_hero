
exports.up = function(knex) { //criação da tabela
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();// com parâmetro tamanho do caractere
      
  });
};

exports.down = function(knex) { // metodo para deletar algo na tabela
    return knex.schema.dropTable('ongs');
  
};
