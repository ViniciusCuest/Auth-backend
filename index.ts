import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.disable('x-powered-by');

app.listen(port, () => {
   console.log(`Running on http://localhost:${port}`);
   console.log('aqui');
});