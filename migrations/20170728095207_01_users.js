
exports.up = function(knex, Promise) {
	return knex.schema.createTable(('users'), (table) => {
		table.increments('id').primary();
		table.text('username').notNullable();
		table.text('email').notNullable();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
