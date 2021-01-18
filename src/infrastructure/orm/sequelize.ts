require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	storage: './__tests__/database.sql',
	timestamp: true,
	underscored: true,
	underscoredAll: true,
};
