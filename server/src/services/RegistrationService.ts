import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';

interface IRegister {
	name: string;
	surname: string;
	email: string;
	password: string;
}

export default class RegistrationService {
	async register(req: Request, res: Response) {
		const account: IRegister = req.body;
		const isEmailUsed = await db('users').where({ email: account.email });
		if (isEmailUsed[0]) {
			return res.status(403).json({
				error: 'email',
				message: 'Esse email já está em uso.',
			});
		}
		try {
			const salt = await bcrypt.genSalt();
			const hashedPassword = await bcrypt.hash(account.password, salt);

			await db('users').insert({
				name: account.name,
				surname: account.surname,
				email: account.email,
				password: hashedPassword,
				avatar:
					'https://wdeapc.com/wp-content/uploads/2016/01/user-placeholder.png',
			});

			return res.status(201).send();
		} catch (err) {
			console.log(err);
			return res.status(400).send();
		}
	}
}
