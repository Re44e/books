import { IUserRepository } from '../../business/user-interface'
import { Request, Response } from 'express'

export class AddBook {

	constructor(
		private readonly repository: IUserRepository
	) { }

	execute = async (req: Request, res: Response): Promise<Response> => {
		const data = req.body;
		
		try {
			const book = await this.repository.addBook(data);
			return res.status(201).json({ message: "Operação realizada com sucesso...", book });
		} catch (error) {
			return res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}