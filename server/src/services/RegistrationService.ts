import bcrypt from 'bcrypt';

import db from '../database/connection';
import IServiceResponse from '../utils/serviceResponse';

interface IAccount {
	name: string;
	surname: string;
	email: string;
	password: string;
}

export default class RegistrationService {
	async register(account: IAccount): Promise<IServiceResponse> {
		const isEmailUsed = await db('users').where({ email: account.email });
		if (isEmailUsed[0]) {
			return {
				failed: true,
				statusCode: 401,
				response: {
					error: 'email',
					message: 'Esse email já está em uso.',
				},
			};
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

			return { failed: false, statusCode: 201 };
		} catch (err) {
			console.log(err);
			return { failed: true, statusCode: 400 };
		}
	}
}
