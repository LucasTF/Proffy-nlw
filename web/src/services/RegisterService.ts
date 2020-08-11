import api from '../utils/api';

interface IAccount {
	name: string;
	surname: string;
	email: string;
	password: string;
}

export function register(accountSubmition: IAccount) {
	const statusCode = api
		.post('/register', accountSubmition)
		.then(res => {
			return res.status;
		})
		.catch(err => {
			console.log(err);
		});

	return statusCode;
}
