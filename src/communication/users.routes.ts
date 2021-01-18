import { Router } from 'express'
import {createUser, addBook, getUser } from '..//domain/application/users/main'

const usersRoutes = Router();

usersRoutes.post('/user', createUser.execute);
usersRoutes.post('/book', addBook.execute);
usersRoutes.get('/user/:id', getUser.execute);

export { usersRoutes };