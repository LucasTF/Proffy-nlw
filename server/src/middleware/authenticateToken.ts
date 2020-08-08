import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authenticateToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers['authorization'];
	if (!authHeader) return res.sendStatus(401);

	const token = authHeader.split(' ')[1];

	jwt.verify(
		token,
		process.env.ACCESS_TOKEN_SECRET as string,
		(err, user) => {
			if (err) return res.sendStatus(403);
			req.user = user;
			next();
		}
	);
}
