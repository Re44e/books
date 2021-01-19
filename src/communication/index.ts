import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { operationsRoutes } from './operations.routes'

const routes = Router();

routes.use(usersRoutes);
routes.use(operationsRoutes);

export { routes } 