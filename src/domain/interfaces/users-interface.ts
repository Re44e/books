import { User } from "../../infrastructure/postgres/core/entities/user"
import { IUsersDTO } from "./resources/users-dto"

export interface ISimulatorRepository {
  createUser(data: IUsersDTO): Promise<User>
}