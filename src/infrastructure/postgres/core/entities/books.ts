import { Model, DataTypes, BelongsTo } from 'sequelize'
import { sequelize } from '../../../orm/index'
import { v4 as uuid } from 'uuid'
import { User } from './user';

export class Books extends Model {
	public id!: string;
	public title!: string;
  public pages!: number;
  public logged_user_id!: string;
}

Books.init(
	{
		title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    logged_user_id: DataTypes.UUIDV4,
	},
	{
		hooks: {
			beforeCreate: async (book) => {
				book.id = uuid();
			}

		},
		tableName: 'books',
		sequelize,
	}
);

Books.belongsTo(User, { foreignKey: 'logged_user_id'})

