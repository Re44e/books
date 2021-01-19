import { IOperationsRepository } from '../../business/operations-interface'
import { Request, Response } from 'express'

export class LendBook {

	constructor(
		private readonly repository: IOperationsRepository
	) { }

	execute = async (req: Request, res: Response): Promise<void> => {
		const data = req.body;
		
		try {
			const register = await this.repository.lendBook(data);
			if(!register){
				res.status(200).json({ message: "O livro solicitado não está disponível..." });
			}
			res.status(201).json({ message: "Operação realizada com sucesso..." });
		} catch (error) {
			res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}