//importamos express y las funciones del controlador
//usamos express.Router para establecer las rutas vs funciones a ejecutar
//exportamos las rutas
import { Router } from 'express';

import {
  getCcostos,
  delCcostoById,
  insOrUpdCcosto,
} from '../controllers/ccostos.controller';

const router = Router();

router.get('/ccostos/:iidccosto', getCcostos);
router.delete('/ccostos/:iidccosto', delCcostoById);
router.post('/ccostos', insOrUpdCcosto);

export default router;
