import { Sequelize } from 'sequelize'
const config = require('./sequelize')

const sequelize = new Sequelize(
	config.database,
	config.password,
	config.username,
	config,
);

export { sequelize }
