
exports.up = function(knex, Promise) {
	return knex.schema.createTable('sandcastles', (table) => {
		table.increments('id').primary();
		table.text('name');
		table.text('description');
		table.text('url').notNullable();
		table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('sandcastles');
};
