import { Router } from 'express';

import { login, register } from '../controllers/auth-controller';
 
import refreshToken from '../controllers/refresh-token';

const authRoutes = Router();

authRoutes
  .post('/login', login)
  .post('/register', register)
  .post('/refresh-token', refreshToken);

export default authRoutes;