import { User } from '../entities/user'
import { IUserRepository } from '../../../../domain/business/user-interface'
import { IUsersDTO } from '../../../../domain/business/resources/users-dto'
import { IBooksDTO } from '../../../../domain/business/resources/books-dto'
import { Books } from '../entities/books';
import { sequelize } from '../../../orm';
import { Operations } from '../entities/operations';

export class UserRepository implements IUserRepository {

  public async createUser(data:IUsersDTO) {
    try { 
      return await User.create({...data});
    }
    catch(error){ throw error; }
  }

  public async addBook(data:IBooksDTO) {
    const t = await sequelize.transaction();
    try { 
      const book = await Books.create({...data},{ transaction: t });

      // Inicializa registros na tabela de operações de empréstimo.
      await Operations.create(
        { book_id: book.id, from_user: data.logged_user_id }, 
        { transaction: t }
      );

      await t.commit();
      return book;
    }
    catch(error){ await t.rollback(); throw error;}
  }

  public async getUser(id:string) {
    try { 

      const user = await User.findOne({
        attributes:['id','name','email'],
        where: { id: id },
      });

      const books =  await Books.findAll({
        attributes:['id','title','pages'],
        where: { logged_user_id: id },
      });

      const result = {
        details: user,
        collections: books
      }

      return result;
    }
    catch(error){ throw error; }
  }
  
}