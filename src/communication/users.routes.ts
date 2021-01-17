import { Router } from 'express'
import {createUser} from '..//domain/application/users/main'

const usersRoutes = Router();

usersRoutes.post('/user', createUser.execute);

export { usersRoutes };