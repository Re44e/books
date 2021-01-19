import { IUserRepository } from '../../business/user-interface'
import { Request, Response } from 'express'

export class CreateUser {

	constructor(
		private readonly repository: IUserRepository
	) { }

	execute = async (req: Request, res: Response): Promise<void> => {
		const data = req.body
		try {
			const user = await this.repository.createUser(data);
			res.status(201).json({ message: "Operação realizada com sucesso...", user });
		} catch (error) {
			res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}