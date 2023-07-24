import { NextFunction, Request, Response } from 'express';
import jwt, { DecodeOptions, VerifyErrors } from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {

    const key: string = process.env.JWT_ACCESS || '';
    const auth: string | undefined = req.header('Authorization');
    if (!auth)
        return res.status(401).send({ message: 'Unauthorized' });

    const token = auth.split(" ")[1];

    jwt.verify(token, key, (err: VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
        if (err)
            return res.status(403).send({ message: 'Invalid token!' });

        next();
    });
}