import { app } from '../../index';
import { describe, it, expect, vi, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

import request from 'supertest';
import Users from '../models/users';
import { randomUUID } from 'crypto';
import mongoose from 'mongoose';

vi.mock('../config/tokens');

beforeEach(async () => {
  await Users.create({
    id: randomUUID(),
    full_name: 'Vinicius Costa',
    phone: '55 13 94395898',
    country: 'Brasil',
    email: 'vinicius@gmail.com',
    password: '123'
  });
});

afterEach(async () => {
  await Users.deleteMany({ email: 'vinicius@gmail.com' });
})

describe('Login', async () => {

  it('should login when given credentials are correct', async () => {
    const response = await request(app).post('/login').send({
      email: 'vinicius@gmail.com',
      password: '123'
    });

    expect(response.status).toBe(200);
  });

  it('should return 400 status code when given credentials are incorrect', async () => {
    const response = await request(app).post('/login').send({
      email: 'vinicius@gmail.com',
      password: '12343589734'
    });

    expect(response.status).toBe(401);
  });

  it('should return body malformed error', async () => {
    const response = await request(app).post('/login').send({

    });

    expect(response.status).toBe(400);
  })
});