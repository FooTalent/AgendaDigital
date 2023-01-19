import express from 'express';
import {
   autenticarEscuela,
   confirmarEscuela,
   registrarEscuela,
   olvidePasswordEscuela,
   comprobarTokenEscuela,
   nuevoPasswordEscuela,
   perfilEscuela,
   modificarEscuela,
} from '../controllers/escuela.controllers.js';
import { checkAuth } from '../middleware/checkAuth.js';
const router = express.Router();

router.post('/', registrarEscuela);
router.get('/confirmar/:token', confirmarEscuela);
router.post('/login', autenticarEscuela);
router.put('/modificar/:id', modificarEscuela);

router.post('/olvide-password', olvidePasswordEscuela);
router
   .route('/olvide-password/:token')
   .get(comprobarTokenEscuela)
   .post(nuevoPasswordEscuela);
//TODO solucionar el problema de la ruta de perfil
router.get('/perfilEscuela', checkAuth, perfilEscuela);
export default router;
