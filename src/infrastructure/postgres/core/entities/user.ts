import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../orm/index'
import { v4 as uuid } from 'uuid'

export class User extends Model {
	public id!: string;
	public name!: string;
	public email!: string;
	public collection!: string;
	public lent_books!: string;
	public borrowed_books!: string;
}

User.init(
	{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		collection: DataTypes.JSON,
		lent_books: DataTypes.JSON,
		borrowed_books: DataTypes.JSON
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

