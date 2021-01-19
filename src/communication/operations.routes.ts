import { Router } from 'express'
import { lendbook, returnbook } from '..//domain/application/operations/main'

const operationsRoutes = Router();

operationsRoutes.put('/book/lend', lendbook.execute);
operationsRoutes.put('/book/return', returnbook.execute);


export { operationsRoutes };