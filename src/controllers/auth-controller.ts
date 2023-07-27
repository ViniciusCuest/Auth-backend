import { Request, Response } from 'express';
import Users from '../models/users';
import { randomUUID } from 'crypto';
import { generateAccessToken } from '../config/tokens';

async function login(req: Request, res: Response) {

  if (!Object.keys(req.body).length)
    return res.status(400).send({
      message: 'Request malformed'
    });

  try {
    const { email, password } = req.body;
    const user = await Users
      .findOne({ email, password })
      .exec();

    if (!user) {
      return res.status(401).send({
        message: 'Email or password incorrect, try again!'
      });
    }

    return res.status(200).send({
      full_name: user.full_name,
      email: user.email,
      country: user.country,
      phone: user.phone,
      refresh_token: generateAccessToken({ sub: user.id, scopes: [0], exp: 60 }),
      access_token: generateAccessToken({ sub: user.id, scopes: [0], exp: 30 }),
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).send({
      message: 'Internal server error.'
    });
  }
}

async function register(req: Request, res: Response) {
  const isUserCreated = await Users
    .create({
      id: randomUUID(),
      full_name: req.body.fullname,
      phone: req.body.phone,
      email: req.body.email,
      country: req.body.country,
      password: req.body.password
    });

  if (!isUserCreated)
    return res.status(400).send({
      message: 'User hasn\'t been created'
    });

  return res.status(201).send({
    isUserCreated
  });
}

export {
  login,
  register
};