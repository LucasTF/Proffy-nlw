import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import db from '../database/connection';

import IServiceResponse from '../utils/serviceResponse';

interface ICredentials {
	email: string;
	password: string;
}

export default class AuthService {
	async login(credentials: ICredentials): Promise<IServiceResponse> {
		const user = await db('users')
			.where({ email: credentials.email })
			.select('*');

		if (!user[0]) {
			return {
				failed: true,
				statusCode: 401,
				response: {
					error: 'email',
					message: 'Esse email não está cadastrado.',
				},
			};
		}

		const isValid = await bcrypt.compare(
			credentials.password,
			user[0].password
		);
		if (isValid) {
			const validatedUser = {
				email: user[0].email,
				password: user[0].password,
			};

			const accessToken = jwt.sign(
				validatedUser,
				process.env.ACCESS_TOKEN_SECRET as string,
				{ expiresIn: '15s' }
			);
			const refreshToken = jwt.sign(
				validatedUser,
				process.env.REFRESH_TOKEN_SECRET as string
			);

			return {
				failed: false,
				statusCode: 200,
				response: {
					user: user[0],
					tokens: { accessToken, refreshToken },
				},
			};
		}

		return {
			failed: true,
			statusCode: 401,
			response: { message: 'Credenciais inválidas!' },
		};
	}
}
