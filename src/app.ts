import express from 'express';
import { routes } from './communication/index'
import dotenv from 'dotenv'

const app = express();

dotenv.config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
app.use(express.json());

app.use(routes);

export { app };
