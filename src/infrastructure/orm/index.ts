import { Sequelize } from 'sequelize'
const config = require('./sequelize')

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

export { sequelize }
