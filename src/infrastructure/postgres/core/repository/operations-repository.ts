import { IOperationsRepository } from '../../../../domain/business/operations-interface';
import { ILendBooksDTO } from '../../../../domain/business/resources/lend-book-dto'
import { LendBook } from '../entities/lend-books';
import { sequelize } from '../../../orm';

export class OperationsRepository implements IOperationsRepository {

  public async lendBook(payload: ILendBooksDTO){
    const t = await sequelize.transaction();
    try {
      const validation = await LendBook.findOne({
        where: { book_id: payload.book_id, returned_at: null }
      });

      if(validation){
        const operation = await LendBook.update(
          {
            from_user: payload.logged_user_id,
            to_user: payload.to_user, 
            lent_at: new Date()
          }, 
          { where: { book_id: payload.book_id }, transaction: t }
        );
        await t.commit();
        return operation;
      }
      await t.commit();
      return false
      
    }
    catch(error){ await t.rollback(); throw error; }

  }
}