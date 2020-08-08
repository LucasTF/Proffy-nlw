import { Request, Response } from 'express';

import RegistrationService from '../services/RegistrationService';
import LoginService from '../services/LoginService';

export default class AuthController {
	loginService: LoginService;
	registrationService: RegistrationService;

	constructor() {
		this.loginService = new LoginService();
		this.registrationService = new RegistrationService();
	}

	index(req: Request, res: Response) {
		this.loginService.login(req, res);
	}

	create(req: Request, res: Response) {
		this.registrationService.register(req, res);
	}
}
