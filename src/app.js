import express from 'express';
import config from './config.js';

import serviciosRoutes from './routes/servicios.routes';

const app = express();

app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(serviciosRoutes);

export default app;
