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

  public async addBook(logged_user_id: string, data:IBooksDTO) {
    try { 
      return await Books.create({ user_id: logged_user_id, ...data});
    }
    catch(error){ throw error; }
  }
  
}