import { Application } from 'express';
import { validateToken } from '../middlewares/validateToken';

import authRoutes from './auth-route';
import productRoutes from './product-route';

const routes = (app: Application) => {
  app.use(authRoutes);
  app.use(validateToken);
  app.use(productRoutes);
};

export default routes;