import { Operations } from '../../infrastructure/postgres/core/entities/operations'
import { ILendBooksDTO, IReturnBooksDTO } from "./resources/operations-dto"


export interface IOperationsRepository {

  lendBook(payload:ILendBooksDTO): Promise<[number, Operations[]] | false>
  returnBook(payload:IReturnBooksDTO): Promise<[number, Operations[]] | false>

}