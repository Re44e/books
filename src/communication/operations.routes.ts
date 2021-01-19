import { Router } from 'express'
import { lendbook } from '..//domain/application/operations/main'

const lentBookRoutes = Router();

lentBookRoutes.put('/book/lend', lendbook.execute);


export { lentBookRoutes };