import { IUserRepository } from '../../business/user-interface'
import { Request, Response } from 'express'

export class GetUser {

	constructor(
		private readonly repository: IUserRepository
	) { }

	execute = async (req: Request, res: Response): Promise<void> => {
		const {id} = req.params
		try {
			const user = await this.repository.getUser(id);
			res.status(200).json({ message: "Operação realizada com sucesso...", user });
		} catch (error) {
			res.status(401).json({ message: "Erro: consulte administração...", details: error.message });
		}
	}

}