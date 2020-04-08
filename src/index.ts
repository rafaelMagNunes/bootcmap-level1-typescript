import express from 'express';

import { hellowWorld } from './routes';

const app = express();

app.get('/', hellowWorld);

app.listen(3333);
