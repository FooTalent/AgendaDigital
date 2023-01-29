import Escuela from '../models/Escuela.model.js';
import generarId from '../helpers/generarId.js';
import generatorJWT from './generatorJWT.js';
import Alumno from '../models/Alumnos.model.js';
import Preceptor from '../models/Preceptor.model.js';
import Profesor from '../models/Profesor.model.js';
import { emailRegistro } from './sendEmail.js';
import Administrativo from '../models/Administrativos.model.js';
import Admin from '../models/SuperAdmin.model.js';
export const registro = (model) => async (req, res) => {
   const { email, rol } = req.body;
   const { id } = req.params;
   const existe = await model.findOne({ email });
   const existeEscuela = await Escuela.findById(id);
   const admin = await Admin.find();
   if (existe) {
      const error = new Error('El email ya está registrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      const nuevo = await model.create(req.body);
      nuevo.token = generarId();
      await nuevo.save();
      // await emailRegistro(
      //    nuevo.name,
      //    nuevo.email,
      //    nuevo.token,
      //    'Comprueba tu cuenta en Aula Equis',
      //    'Aula Equis - Confirmacion de cuenta'
      // );
      if (nuevo.rol === 'Escuela') {
         admin.forEach(async (ad) => {
            await Admin.findByIdAndUpdate(ad._id, {
               $push: { escuelasRegistradas: nuevo._id },
            });
         });
      }
      res.status(201).json({ message: 'Usuario creado correctamente' });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const confirmar = (model) => async (req, res) => {
   const { token } = req.params;
   const usuario = await model.findOne({ token });
   if (!usuario) {
      const error = new Error('Usuario no encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      usuario.confirmado = true;
      usuario.token = '';
      await usuario.save();
      res.status(200).json('Usuario confirmado correctamente');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const autenticar = (model) => async (req, res) => {
   const { email, password } = req.body;
   const usuario = await model.findOne({ email });
   if (!usuario) {
      const error = new Error('Usuario no encontrado');
      return res.status(400).json({ error: error.message });
   }
   if (!usuario.confirmado) {
      const error = new Error('Usuario no confirmado');
      return res.status(400).json({ error: error.message });
   }
   if (await usuario.comparePassword(password)) {
      res.status(200).json({
         _id: usuario._id,
         name: usuario.name,
         email: usuario.email,
         rol: usuario.rol,
         token: generatorJWT(usuario._id),
      });
   } else {
      const error = new Error('Contraseña incorrecta');
      return res.status(400).json({ error: error.message });
   }
};
export const modificar = (model) => async (req, res) => {
   const { id } = req.params;
   const existe = await model.findById(id);
   if (!existe || existe._id != id) {
      const error = new Error('Usuario no encontrado');
      return res.status(400).json({ error: error.message });
   }
   const rol = existe.rol;
   if (rol === 'Escuela') {
      existe.name = req.body.name || existe.name;
      existe.email = req.body.email || existe.email;
      existe.password = req.body.password || existe.password;
      existe.telefono = req.body.telefono || existe.telefono;
      existe.direccion = req.body.direccion || existe.direccion;
   } else {
      existe.name = req.body.name || existe.name;
      existe.email = req.body.email || existe.email;
      existe.password = req.body.password || existe.password;
      existe.telefono = req.body.telefono || existe.telefono;
   }
   try {
      await existe.save();
      //enviar mail
      // await emailModificacion(
      //    admin.name,
      //    admin.email,
      //    'Modificacion de cuenta en Aula Equis',
      //    'Aula Equis - Modificacion de cuenta'
      // );
      res.status(200).json('Usuario modificado correctamente');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const olvidePassword = (model) => async (req, res) => {
   const { email } = req.body;
   const usuario = await model.findOne({ email });
   if (!usuario) {
      const error = new Error('Usuario no encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      usuario.token = generarId();
      await usuario.save();
      //enviar mail
      // await emailResetPassword(
      //    usuario.name,
      //    usuario.email,
      //    usuario.token,
      //    'Restablecer contraseña',
      //    'Aula Equis - Restablecer contraseña'
      // );
      res.status(200).json('Se envió un mail para restablecer la contraseña');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const comprobarToken = (model) => async (req, res) => {
   const { token } = req.params;
   const tokenValido = await model.findOne({ token });
   if (tokenValido) {
      res.json({ msg: 'Token válido y el Usuario existe' });
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};
export const nuevoPasword = (model) => async (req, res) => {
   const { token } = req.params;
   const { password } = req.body;
   const usuario = await model.findOne({ token });
   if (password.length < 6) {
      const error = new Error('La contraseña debe tener al menos 6 caracteres');
      return res.status(400).json({ error: error.message });
   }
   if (usuario) {
      usuario.password = password;
      usuario.token = '';
      await usuario.save();
      res.status(200).json('Contraseña modificada correctamente');
   } else {
      const error = new Error('Usuario no encontrado');
      return res.status(400).json({ error: error.message });
   }
};
export const agregarRegistro = (model) => async (req, res) => {
   const { id } = req.params;
   const { rol } = req.body;
   const existe = await model.findById(id);
   if (!existe) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   switch (rol) {
      case 'Administrativo':
         const admins = await Administrativo.create(req.body);
         admins.token = generarId();
         existe.administrativoId.push(admins._id);
         admins.agregadoPor = existe._id;
         await Promise.all([admins.save(), existe.save()]);
         //enviar mail
         // await emailRegistro(
         //    existe.name,
         //    admins.name,
         //    rol,
         //    admins.token,
         //    admins.email,
         //    'Comprueba tu cuenta en Aula Equis',
         //    'Aula Equis - Confirmacion de cuenta'
         // );
         res.status(200).json(admins);
         break;
      case 'Preceptor':
         const preceptor = await Preceptor.create(req.body);
         preceptor.token = generarId();
         existe.preceptorId.push(preceptor._id);
         preceptor.agregadoPor = existe._id;
         await Promise.all([preceptor.save(), existe.save()]);
         //enviar mail
         res.status(200).json(preceptor);
         break;
      case 'Alumno':
         const alumno = await Alumno.create(req.body);
         alumno.token = generarId();
         existe.alumnoId.push(alumno._id);
         alumno.agregadoPor = existe._id;
         await Promise.all([alumno.save(), existe.save()]);
         //enviar mail
         res.status(200).json(alumno);

         break;
      case 'Padre':
         const padre = await Padre.create(req.body);
         padre.token = generarId();
         existe.padreId.push(padre._id);
         padre.agregadoPor = existe._id;
         await Promise.all([padre.save(), existe.save()]);
         //enviar mail
         res.status(200).json(padre);
         break;
      case 'Profesor':
         const profesor = await Profesor.create(req.body);
         profesor.token = generarId();
         existe.profesorId.push(profesor._id);
         profesor.agregadoPor = existe._id;
         await Promise.all([profesor.save(), existe.save()]);
         //enviar mail
         res.status(200).json(profesor);
         break;

      default:
         const error = new Error('Rol no válido');
         return res.status(400).json({ error: error.message });
   }
};
export const traerAdministrativos = (model) => async (req, res) => {
   const { id } = req.params;
   const existe = await model.findById(id);
   const administrativos = await Administrativo.find({
      escuelaId: existe.escuelaId,
   });
   const idEscuela = existe.escuelaId;
   if (!existe) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   if (administrativos.escuelaId !== idEscuela) {
      const error = new Error(
         'No puedes ver los Administrativos de otra Escuelas'
      );
      return res.status(400).json({ error: error.message });
   }
   res.status(200).json(administrativos);
};
export const traerPreceptores = (model) => async (req, res) => {
   const { id } = req.params;
   const existe = await model.findById(id);
   const preceptores = await Preceptor.find({ escuelaId: existe.escuelaId });
   const idEscuela = existe.escuelaId;
   if (!existe) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   if (preceptores.escuelaId !== idEscuela) {
      const error = new Error('No puedes ver los Precectores de otra Escuelas');
      return res.status(400).json({ error: error.message });
   }
   res.status(200).json(preceptores);
};
export const traerProfesor = (model) => async (req, res) => {
   const { id } = req.params;
   const existe = await model
      .findById(id)
      .populate('profesorId', 'name email')
      .populate('alumnoId', 'name email');
   if (!existe) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   res.status(200).json(existe);
};
