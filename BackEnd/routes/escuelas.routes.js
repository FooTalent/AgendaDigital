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
   agregarRegistroEscuela,
   traerAdministrativosTodos,
   traerPreceptorTodos,
   traerProfesorTodos,
   traerAlumnosTodos,
   traerTodos,
} from '../controllers/escuela.controllers.js';
import { agregarRegistro } from '../helpers/controllers.js';
import { checkAuth } from '../middleware/checkAuth.js';
const router = express.Router();
router.post('/', registrarEscuela);
router.get('/confirmar/:token', confirmarEscuela);
router.post('/registrar/:id', agregarRegistroEscuela); 
router.post('/login', autenticarEscuela);
router.put('/modificar/:id', modificarEscuela);  

router.post('/olvide-password', olvidePasswordEscuela);
router
   .route('/olvide-password/:token')
   .get(comprobarTokenEscuela)
   .post(nuevoPasswordEscuela);
router.post('registrar/:id', agregarRegistro); //!

//TODO solucionar el problema de la ruta de perfil
router.get('/perfil', checkAuth, perfilEscuela);

router.get('/:id/administrativos', traerAdministrativosTodos); 
router.get('/:id/preceptores', traerPreceptorTodos);  
router.get('/:id/profesores', traerProfesorTodos);  
router.get('/:id/padres', traerAlumnosTodos);
router.get('/:id/traertodos', traerTodos);
// router.get('/alumnos', traerAlumnos);
// router.get('/alumnos/:id', traerAlumnosDePadre);
export default router;
