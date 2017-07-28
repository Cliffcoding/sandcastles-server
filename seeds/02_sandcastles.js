const sandcastles = require('./seed-data/sandcastles');

exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE sandcastles RESTART IDENTITY CASCADE')
	.then(function () {
      return knex('sandcastles').insert(sandcastles);
    });
};
