import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../orm/index'
import { v4 as uuid } from 'uuid'

export class Operations extends Model {
	public id!: string;
	public book_id!: string;
	public from_user!: string;
	public to_user!: string;
	public lent_at!: string;
	public returned_at!: string;
}

Operations.init(
	{
		book_id: DataTypes.UUIDV4,
		from_user: DataTypes.UUIDV4,
		to_user: DataTypes.UUIDV4,
		lent_at: DataTypes.DATE,
		returned_at: DataTypes.DATE
	},
	{
		hooks: {
			beforeCreate: async (operation) => {
				operation.id = uuid();
			}

		},
		tableName: 'operations',
		sequelize,
	}
);