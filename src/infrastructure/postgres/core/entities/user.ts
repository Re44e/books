import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../orm/index'
import { v4 as uuid } from 'uuid'

export class User extends Model {
	public id!: string;
	public name!: string;
	public email!: string;
}

User.init(
	{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
	},
	{
		hooks: {
			beforeCreate: async (user) => {
				user.id = uuid();
			}

		},
		tableName: 'users',
		sequelize,
	}
);

