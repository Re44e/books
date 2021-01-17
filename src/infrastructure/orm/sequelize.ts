require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.HOST,
	storage: './__tests__/database.sql',
	logging: true,
	timestamp: true,
	underscored: true,
	underscoredAll: true,
};
