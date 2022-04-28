import express from 'express';
import cors from 'cors';
import config from './config.js';
import serviciosRoutes from './routes/servicios.routes';
import ccostosRoutes from './routes/ccostos.routes';

const app = express();

app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(serviciosRoutes);
app.use(ccostosRoutes);

export default app;
