import express from 'express';
import routes from './src/routes/index';
import database from './src/config/database';

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