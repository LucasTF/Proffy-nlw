import express from 'express';
import env from 'dotenv';
import cors from 'cors';

import routes from './routes';

const app = express();

env.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
