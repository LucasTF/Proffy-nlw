import 'express';

declare module 'express' {
	export interface Request {
		user?: object;
	}
}
