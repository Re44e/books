import { CreateUser } from './create-user'
import { UserRepository } from '../../../infrastructure/postgres/core/repository/users-repository'

const postgres = new UserRepository();
const createUser = new CreateUser(postgres);

export { createUser }