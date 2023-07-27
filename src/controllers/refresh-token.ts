import { decode, verify } from 'jsonwebtoken';
import { generateAccessToken } from '../config/tokens';
import { Request, Response } from 'express';

function refreshToken(req: Request, res: Response) {

  const key: string = process.env.JWT_REFRESH || '';
  const auth: { refresh_token: string | undefined } = req.body;

  console.log('FROM FRONTEND: ', auth.refresh_token);
  if (!auth.refresh_token)
    return res.status(400).send({ message: 'Token is missing!' });

  try {
    verify(auth.refresh_token, key);
    const sub_values = decode(auth.refresh_token);
    if (sub_values?.sub) {
      const access_token = generateAccessToken({ sub: '' + sub_values.sub, scopes: [0] });
      res.status(200).send({
        access_token,
        refresh_token: auth.refresh_token
      });
    }
  } catch (err) {
    return res.status(401).send({ message: 'Invalid token! Login again.' });
  }

}

export default refreshToken;