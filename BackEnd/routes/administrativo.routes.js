import express from 'express';
import {
   confirmarAdministrativo,
   autenticarAdministrativo,
   modificarAdministrativo,
   olvidePasswordAdministrativo,
   comprobarTokenAdministrativo,
   nuevoPasswordAdministrativo,
   perfilAdministrativo,
   registrar,
   agregarRegistroAdministrativo,
   traerAdministrativosTodos,
   traerProfesorTodos,
   traerPreceptorTodos,
} from '../controllers/administrativo.controllers.js';
const router = express.Router();


router.post('/', registrar);
router
   .route('/confirmar/:token')
   .get(confirmarAdministrativo)
   .post(nuevoPasswordAdministrativo);
router.post('/registrar/:id', agregarRegistroAdministrativo);
router.post('/login', autenticarAdministrativo);

router.put('/modificar/:id', modificarAdministrativo);

router.post('/olvide-password', olvidePasswordAdministrativo);
router
   .route('/olvide-password/:token')
   .get(comprobarTokenAdministrativo)
   .post(nuevoPasswordAdministrativo);

router.get('/perfil', perfilAdministrativo);

router.get('/:id/administrativos', traerAdministrativosTodos);
router.get('/:id/preceptores', traerPreceptorTodos);
router.get('/:id/profesores', traerProfesorTodos);
// router.get('/padres', traerPadres);
// router.get('/alumnos', traerAlumnos);
// router.get('/alumnos/:id', traerAlumnosDePadre);


//traer los alumnos de un padre
//traer los alumnos por clases
// router.get('/alumnos/clases/:id', traerAlumnosPorClase);

//traer todos los profesores
//asignar el profesor a una aula
// router.post('/profesor/aula/:id', asignarProfesorAula);

export default router;
