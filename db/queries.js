const knex = require('./knex');

module.exports = {
	getAllSandcastles() {
		return knex('sandcastles').select('sandcastles.id as id', 'sandcastles.url as url', 'users.id as user_id', 'sandcastles.description as description', 'sandcastles.name as name').join('users', 'user_id', '=', 'users.id')
	},
	addNewSandcastle(sandcastle) {
		return knex('sandcastles').insert(sandcastle, '*');
	},
	deleteSandcastle(id){
		return knex('sandcastles').where('id', id).del();
	}
};
