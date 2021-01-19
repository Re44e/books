import { IOperationsRepository } from '../../business/operations-interface'
import { Request, Response } from 'express'

export class ReturnBook {

	constructor(
		private readonly repository: IOperationsRepository
	) { }

	execute = async (req: Request, res: Response): Promise<Response> => {
		const data = req.body;
		
		try {
			const register = await this.repository.returnBook(data);
			if(!register){
				return res.status(200).json({ message: "Este livro já foi devolvido..." });
			}
			return res.status(201).json({ message: "Operação realizada com sucesso..." });
		} catch (error) {
			return res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}