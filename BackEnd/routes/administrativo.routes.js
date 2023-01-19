import express from 'express';
import {
   registrarAdministrativo,
   confirmarAdministrativo,
   autenticarAdministrativo,
   modificarAdministrativo,
   olvidePasswordAdministrativo,
   comprobarTokenAdministrativo,
   nuevoPasswordAdministrativo,
   perfilAdministrativo,
} from '../controllers/administrativo.controllers.js';
const router = express.Router();

router.post('/', registrarAdministrativo);
router.get('/confirmar/:token', confirmarAdministrativo);
router.post('/login', autenticarAdministrativo);
router.put('/modificar/:id', modificarAdministrativo);

router.post('/olvide-password', olvidePasswordAdministrativo);
router
   .route('/olvide-password/:token')
   .get(comprobarTokenAdministrativo)
   .post(nuevoPasswordAdministrativo);
router.get('/perfil', perfilAdministrativo);

export default router;
