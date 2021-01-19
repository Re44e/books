import { LendBook } from './lend-book'

import { OperationsRepository } from '../../../infrastructure/postgres/core/repository/operations-repository'

const postgres = new OperationsRepository();
const lendbook = new LendBook(postgres);


export { lendbook }