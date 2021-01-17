import { User } from '../entities/user'
import { IRepository } from '../../../../domain/business/repository-interface'
import { IUsersDTO } from '../../../../domain/business/resources/users-dto'

export class UserRepository implements IRepository {

  public async createUser(data:IUsersDTO) {
    try { 
      return await User.create({...data})
    }
    catch(error){ throw error; }
  }
  
}