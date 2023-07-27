import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {

  const key: string = process.env.JWT_ACCESS || '';
  const auth: string | undefined = req.header('Authorization');

  if (!auth)
    return res.status(400).send({ message: 'Token is missing!' });

  const [, token] = auth.split(' ');
  let message = '';

  try {
    jwt.verify(token, key);
    return next();
  } catch (err: any) {
    switch (err.message) {
      case 'jwt expired':
        message = 'Token is expired!';
        break;
      default:
        message = 'Invalid token!';
        break;
    }
  }

  return res.status(401).send({
    message
  });

};