import Escuela from '../models/Escuela.model.js';
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
export const registrarEscuela = registro(Escuela);
export const confirmarEscuela = confirmar(Escuela);
export const autenticarEscuela = autenticar(Escuela);
export const modificarEscuela = modificar(Escuela);
export const olvidePasswordEscuela = olvidePassword(Escuela);
export const comprobarTokenEscuela = comprobarToken(Escuela);
export const nuevoPasswordEscuela = nuevoPasword(Escuela);
export const agregarRegistroEscuela = agregarRegistro(Escuela);
export const traerAdministrativosTodos = traerAdministrativos(Escuela);
export const traerProfesorTodos = traerProfesor(Escuela);
export const traerPreceptorTodos = traerPreceptores(Escuela);
export const perfilEscuela = async (req, res) => {
   const { escuela } = req;
   res.json(escuela);
};
