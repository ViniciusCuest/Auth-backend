import { Router } from 'express';
import { login, register } from '../controllers/auth-controller';

const authRoutes = Router();

authRoutes
  .post('/login', login)
  .post('/register', register);

export default authRoutes;