import { Router } from 'express'
import {createUser, addBook } from '..//domain/application/users/main'

const usersRoutes = Router();

usersRoutes.post('/user', createUser.execute);
usersRoutes.post('/book', addBook.execute);

export { usersRoutes };