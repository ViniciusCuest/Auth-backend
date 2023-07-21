import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.configDotenv();

import database from './src/config/database';
import routes from './src/routes/index';

const app = express();
const port = process.env.PORT || 5500;

database.once("open", () => {
   console.log("conectou!");
});

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

routes(app);

app.listen(port, () => {
   console.log(`Running on http://localhost:${port}`);
});