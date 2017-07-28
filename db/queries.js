const knex = require('./knex');

module.exports = {
	getAllSandcastles() {
		return knex('sandcastles').join('users', 'user_id', '=', 'users.id')
	},
	addNewSandcastle(sandcastle) {
		return knex('sandcastles').insert(sandcastle, '*');
	}
};
