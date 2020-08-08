import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import db from '../database/connection';

interface ICredentials {
	email: string;
	password: string;
}

export default class LoginService {
	async login(req: Request, res: Response) {
		const credentials: ICredentials = req.body;
		const user = await db('users')
			.where({ email: credentials.email })
			.select('*');

		if (!user[0]) {
			return res.status(401).json({
				error: 'email',
				message: 'Esse email não está cadastrado.',
			});
		}

		const isValid = await bcrypt.compare(
			credentials.password,
			user[0].password
		);
		if (isValid) {
			const accessToken = jwt.sign(
				{ email: user[0].email, password: user[0].password },
				process.env.ACCESS_TOKEN_SECRET as string
			);

			return res
				.status(200)
				.json({ user: user[0], tokens: { accessToken } });
		}

		return res.status(401).json({ message: 'Credenciais inválidas!' });
	}
}
