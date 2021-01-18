import { CreateUser } from './create-user'
import { AddBook } from './add-book'
import { UserRepository } from '../../../infrastructure/postgres/core/repository/users-repository'

const postgres = new UserRepository();
const createUser = new CreateUser(postgres);
const addBook = new AddBook(postgres);

export { createUser, addBook}