import { IOperationsRepository } from '../../../../domain/business/operations-interface';
import { ILendBooksDTO, IReturnBooksDTO } from '../../../../domain/business/resources/operations-dto'
import { Operations } from '../entities/operations';
import { sequelize } from '../../../orm';
import { Op } from 'sequelize'

export class OperationsRepository implements IOperationsRepository {

  /**
   * Um único registro por livro é mantido na base de dados.
   * As operações armazenam apenas o histórico do último registro.
   * Com isso garantimos o uso mínimo de armazenamento de dados para essas operação.
   */

  public async lendBook(payload: ILendBooksDTO){
    const t = await sequelize.transaction();
    try {
      const validation = await Operations.findOne({
          where: { 
            book_id: payload.book_id, 
            lent_at: { [Op.eq]: null }, 
          }
        });

      if(validation){
        const operation = await Operations.update(
          {
            from_user: payload.logged_user_id,
            to_user: payload.to_user, 
            lent_at: Date.now(),
            returned_at: null
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

  public async returnBook(payload:IReturnBooksDTO){
    const t = await sequelize.transaction();
    try {
      const validation = await Operations.findOne({
        where: { book_id: payload.book_id, returned_at: { [Op.eq]: null } }
      });

      if(validation){
        const operation = await Operations.update(
          { returned_at: Date.now(), lent_at: null },
          { 
            where: { book_id: payload.book_id, }, 
            transaction: t 
          }
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