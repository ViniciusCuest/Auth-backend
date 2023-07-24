import { Application, Request, Response } from 'express';
import authRoutes from './auth-route';
import productRoutes from './product-route';
import { verify } from 'crypto';
import { validateToken } from '../middlewares/validateToken';

const routes = (app: Application) => {
    app.use(authRoutes);
    app.use(validateToken);
    app.use(productRoutes);
}

export default routes;