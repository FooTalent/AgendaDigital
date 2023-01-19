import express from 'express';
import {
   registrar,
   confirmar,
   autenticarAdmin,
   olvidePassword,
   comprobarToken,
   nuevoPasword,
   perfil,
   modificarAdmin,
} from '../controllers/superAdmin.controllers.js';
import { checkAuth } from '../middleware/checkAuth.js';
const router = express.Router();

router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticarAdmin);
router.put('/modificar/:id', modificarAdmin);

router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPasword);
router.get('/perfil', checkAuth, perfil);

export default router;
