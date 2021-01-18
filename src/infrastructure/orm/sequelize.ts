require('dotenv').config();

module.exports = {
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	timestamp: true,
	underscored: true,
	underscoredAll: true,
};
