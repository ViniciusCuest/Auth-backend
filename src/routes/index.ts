import { Application } from 'express';
import authRoutes from './auth-route';
import productRoutes from './product-route';
import { validateToken } from '../middlewares/validateToken';
import refreshToken from '../controllers/refresh-token';

const routes = (app: Application) => {
  app.use(authRoutes);
  app.post('/refresh-token', refreshToken);
  app.use(validateToken);
  app.use(productRoutes);
};

export default routes;