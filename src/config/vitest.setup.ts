import { MongoMemoryServer } from 'mongodb-memory-server';
import { afterAll, beforeAll } from 'vitest';

import mongoose from 'mongoose';
import connectToDatabase from './database';
import Users from '../models/users';
import { randomUUID } from 'crypto';


let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // Inicialize o servidor de banco de dados de memória
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  // Defina a URI do banco de dados de memória como uma variável de ambiente
  process.env.MONGO_URI = mongoUri;

  await connectToDatabase();


}, 0);

afterAll(async () => {
  // Encerre a conexão com o banco de dados de memória e pare o servidor
  await mongoose.disconnect();
  await mongoServer.stop();
});