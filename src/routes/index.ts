import { Application, Request, Response } from 'express';
import router from './login-route';

const routes = (app: Application) => {
    app.use(router);
}

export default routes;