import express from 'express';
const router = express.Router();
import {
   registrar,
   confirmar,
   autenticarAdmin,
   olvidePassword,
   comprobarToken,
   nuevoPasword,
   perfil,
} from '../controllers/superAdmin.controllers.js';
import { checkAuth } from '../middleware/checkAuth.js';
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticarAdmin);

router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPasword);
router.get('/perfil', checkAuth, perfil);

export default router;
