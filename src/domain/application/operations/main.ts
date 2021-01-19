import { LendBook } from './lend-book'
import { ReturnBook } from './return-book'

import { OperationsRepository } from '../../../infrastructure/postgres/core/repository/operations-repository'

const postgres = new OperationsRepository();
const lendbook = new LendBook(postgres);
const returnbook = new ReturnBook(postgres);


export { lendbook, returnbook }