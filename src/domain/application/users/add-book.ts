import { IUserRepository } from '../../business/user-interface'
import { Request, Response } from 'express'

export class AddBook {

	constructor(
		private readonly repository: IUserRepository
	) { }

	execute = async (req: Request, res: Response): Promise<void> => {
		const data = req.body;
		
		try {
			const book = await this.repository.addBook(data);
			res.status(200).json({ message: "Operação realizada com sucesso...", book });
		} catch (error) {
			res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}