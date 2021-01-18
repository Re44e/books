import { User } from '../entities/user'
import { IUserRepository } from '../../../../domain/business/user-interface'
import { IUsersDTO } from '../../../../domain/business/resources/users-dto'
import { IBooksDTO } from '../../../../domain/business/resources/books-dto'
import { Books } from '../entities/books';

export class UserRepository implements IUserRepository {

  public async createUser(data:IUsersDTO) {
    try { 
      return await User.create({...data});
    }
    catch(error){ throw error; }
  }

  public async addBook(data:IBooksDTO) {
    try { 
      return await Books.create({...data});
    }
    catch(error){ throw error; }
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