import express from 'express';
import { routes } from './communication/index'
import dotenv from 'dotenv'

const app = express();

app.use(express.json());

app.use(routes);

export { app };
