import { User } from '../../infrastructure/postgres/core/entities/user'
import { Books } from '../../infrastructure/postgres/core/entities/books'
import { IUsersDTO } from "./resources/users-dto"
import { IBooksDTO } from "./resources/books-dto"

export interface IUserRepository {

  createUser(data: IUsersDTO): Promise<User>
  addBook(logged_user_id: string, data:IBooksDTO): Promise<Books>
  
}