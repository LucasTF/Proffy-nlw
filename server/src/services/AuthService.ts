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

			const accessToken = this.generateToken(validatedUser);
			const refreshToken = jwt.sign(
				validatedUser,
				process.env.REFRESH_TOKEN_SECRET as string
			);

			await db('tokens').insert({
				token: refreshToken,
			});

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

	async logout(refreshToken: string): Promise<IServiceResponse> {
		try {
			await db('tokens').where({ token: refreshToken }).del();
			return { failed: false, statusCode: 204 };
		} catch (err) {
			console.log(err);
			return { failed: true, statusCode: 400 };
		}
	}

	async resign(refreshToken: string): Promise<IServiceResponse> {
		const token = await db('tokens').where({ token: refreshToken });
		if (token[0]) {
			const newToken = jwt.verify(
				refreshToken,
				process.env.REFRESH_TOKEN_SECRET as string,
				(err, user: any) => {
					if (err) return { failed: true, statusCode: 403 };
					const accessToken = this.generateToken({
						email: user.email,
						password: user.password,
					});
					return {
						failed: false,
						statusCode: 200,
						response: { accessToken },
					};
				}
			);
			return (newToken as unknown) as IServiceResponse;
		}
		return { failed: true, statusCode: 403 };
	}

	private generateToken(credentials: ICredentials) {
		return jwt.sign(
			credentials,
			process.env.ACCESS_TOKEN_SECRET as string,
			{ expiresIn: '30s' }
		);
	}
}
