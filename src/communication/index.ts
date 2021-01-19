import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { lentBookRoutes } from './operations.routes'

const routes = Router();

routes.use(usersRoutes);
routes.use(lentBookRoutes);

export { routes } 