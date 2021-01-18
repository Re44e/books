import { User } from '../../infrastructure/postgres/core/entities/user'
import { Books } from '../../infrastructure/postgres/core/entities/books'
import { IUsersDTO } from "./resources/users-dto"
import { IBooksDTO } from "./resources/books-dto"

export interface IUserRepository {

  createUser(data: IUsersDTO): Promise<User>
  addBook(data:IBooksDTO): Promise<Books>

}