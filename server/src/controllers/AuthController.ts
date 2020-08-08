import { Request, Response } from 'express';

import RegistrationService from '../services/RegistrationService';
import AuthService from '../services/AuthService';

export default class AuthController {
	authService: AuthService;
	registrationService: RegistrationService;

	constructor() {
		this.authService = new AuthService();
		this.registrationService = new RegistrationService();
	}

	index(req: Request, res: Response) {
		return res.status(200).json(req.user);
	}

	async login(req: Request, res: Response) {
		const auth = await this.authService.login(req.body);

		if (auth.response)
			return res.status(auth.statusCode).json(auth.response);

		return res.sendStatus(auth.statusCode);
	}

	async create(req: Request, res: Response) {
		const register = await this.registrationService.register(req.body);

		if (register.response)
			return res.status(register.statusCode).json(register.response);

		return res.sendStatus(register.statusCode);
	}
}
