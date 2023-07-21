import express from 'express';
import * as dotenv from 'dotenv';
dotenv.configDotenv();

import database from './src/config/database';
import routes from './src/routes/index';

const app = express();
const port = process.env.PORT || 5000;

database.once("open", () => {
   console.log("conectou!");
});

app.use(express.json());
routes(app);

app.disable('x-powered-by');

app.listen(port, () => {
   console.log(`Running on http://localhost:${port}`);
});