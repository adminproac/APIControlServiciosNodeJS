//importamos express y las funciones del controlador
//usamos express.Router para establecer las rutas vs funciones a ejecutar
//exportamos las rutas
import { Router } from 'express';

import {
  getServicios,
  delServicioById,
  insOrUpdServicio,
} from '../controllers/servicios.controller';

const router = Router();

router.get('/servicios/:iidservicio', getServicios);
router.delete('/servicios/:iidservicio', delServicioById);
router.post('/servicios', insOrUpdServicio);

export default router;
