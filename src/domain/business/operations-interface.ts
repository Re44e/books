import { LendBook } from '../../infrastructure/postgres/core/entities/lend-books'
import { ILendBooksDTO } from "./resources/lend-book-dto"


export interface IOperationsRepository {

  lendBook(payload:ILendBooksDTO): Promise<[number, LendBook[]] | false>

}