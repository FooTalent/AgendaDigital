import {
   agregarRegistro,
   autenticar,
   comprobarToken,
   confirmar,
   modificar,
   nuevoPasword,
   olvidePassword,
   registro,
   traerAdministrativos,
   traerPreceptores,
   traerProfesor,
} from '../helpers/controllers.js';
import Administrativo from '../models/Administrativos.model.js';

export const registrar = registro(Administrativo);
export const confirmarAdministrativo = confirmar(Administrativo);
export const autenticarAdministrativo = autenticar(Administrativo);
export const modificarAdministrativo = modificar(Administrativo);
export const olvidePasswordAdministrativo = olvidePassword(Administrativo);
export const comprobarTokenAdministrativo = comprobarToken(Administrativo);
export const nuevoPasswordAdministrativo = nuevoPasword(Administrativo);
export const agregarRegistroAdministrativo = agregarRegistro(Administrativo);
export const traerAdministrativosTodos= traerAdministrativos(Administrativo)
export const traerProfesorTodos = traerProfesor(Administrativo)
export const traerPreceptorTodos = traerPreceptores(Administrativo)

export const perfilAdministrativo = async (req, res) => {
   const { administrativo } = req;
   res.json(administrativo);
};
