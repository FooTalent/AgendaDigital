import express from 'express';
import {
   registrar,
   autenticarAdmin,
   olvidePasswordAdmin,
   comprobarTokenAdmin,
   nuevoPaswordAdmnin,
   perfil,
   modificarAdmin,
   confirmarAdmin,
   traerEscuelas,
} from '../controllers/superAdmin.controllers.js';
import { checkAuth } from '../middleware/checkAuth.js';
const router = express.Router();

router.post('/', registrar);
router.get('/confirmar/:token', confirmarAdmin);
router.post('/login', autenticarAdmin);
router.put('/modificar/:id', modificarAdmin);

router.post('/olvide-password', olvidePasswordAdmin);
router
   .route('/olvide-password/:token')
   .get(comprobarTokenAdmin)
   .post(nuevoPaswordAdmnin);
router.get('/perfil', checkAuth, perfil);
//traer todas las escuelas
router.get('/escuelas', traerEscuelas);
export default router;
