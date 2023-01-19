import generarId from '../helpers/generarId.js';
import generatorJWT from '../helpers/generatorJWT.js';
import Administrativo from '../models/Administrativos.model.js';
import Escuela from '../models/Escuela.model.js';
import Preceptor from '../models/Preceptor.model.js';
export const registrarAdministrativo = async (req, res) => {
   const { email, emailEscuela } = req.body;
   const existeAdministrativo = await Administrativo.findOne({ email });
   const existeEscuela = await Escuela.findOne({ emailEscuela });
   if (!existeEscuela) {
      const error = new Error('La escuela no existe');
      return res.status(400).json({ error: error.message });
   }
   if (existeAdministrativo) {
      const error = new Error('El administrativo ya existe');
      return res.status(400).json({ error: error.message });
   }
   try {
      const administrativo = await Administrativo.create(req.body);
      administrativo.token = generarId();
      existeEscuela.administrativoId.push(administrativo._id);
      await Promise.all([administrativo.save(), existeEscuela.save()]);
      //enviar mail de confirmacion
      // await transporter.sendMail({
      //    from: '"Fred Foo 👻" <
      //    to: escuela.email, // list of receivers
      //    subject: 'Hello ✔', // Subject line
      //    text: 'Hello world?', // plain text body
      //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
      // });
      res.status(201).json(administrativo);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const confirmarAdministrativo = async (req, res) => {
   const { token } = req.params;
   const administrativo = await Administrativo.findOne({ token });
   if (!administrativo) {
      const error = new Error('Administrativo no encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      administrativo.confirmado = true;
      administrativo.token = '';
      await administrativo.save();
      res.status(200).json('Administrativo confirmado correctamente');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const autenticarAdministrativo = async (req, res) => {
   const { email, password } = req.body;
   const administrativo = await Administrativo.findOne({ email });
   if (!administrativo) {
      const error = new Error('Administrativo no encontrado');
      return res.status(400).json({ error: error.message });
   }
   if (!administrativo.confirmado) {
      const error = new Error('Administrativo no confirmado');
      return res.status(400).json({ error: error.message });
   }
   if (await administrativo.comprobarPassword(password)) {
      res.status(200).json({
         _id: administrativo._id,
         name: administrativo.name,
         email: administrativo.email,
         dni: administrativo.dni,
         token: generatorJWT(administrativo._id),
      });
   } else {
      const error = new Error('Contraseña incorrecta');
      return res.status(400).json({ error: error.message });
   }
};
export const modificarAdministrativo = async (req, res) => {
   const { id } = req.params;
   const existeAdministrativo = await Administrativo.findById(id);
   if (!existeAdministrativo) {
      const error = new Error('Administrativo no encontrado');
      return res.status(400).json({ error: error.message });
   }
   existeAdministrativo.name = req.body.name;
   existeAdministrativo.email = req.body.email;
   existeAdministrativo.dni = req.body.dni;
   existeAdministrativo.password = req.body.password;
   try {
      await existeAdministrativo.save();
      res.status(200).json(existeAdministrativo);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const olvidePasswordAdministrativo = async (req, res) => {
   const { email } = req.body;
   const administrativo = await Administrativo.findOne({ email });
   if (!administrativo) {
      const error = new Error('Administrativo no encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      administrativo.token = generarId();
      await administrativo.save();
      // /enviar mail de confirmacion
      // await transporter.sendMail({
      //    from: '"Fred Foo 👻" <
      //    to: admins.email, // list of receivers
      //    subject: 'Hello ✔', // Subject line
      //    text: 'Hello world?', // plain text body
      //    html: `<b>http://localhost:3000/confirmar/${admins.token}</b>`, // html body
      // });
      // 'Hemos enviado un email con las instrucciones';
      res.status(200).json('Hemos enviado un email con las instrucciones');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const comprobarTokenAdministrativo = async (req, res) => {
   const { token } = req.params;
   const tokenValido = await Administrativo.findOne({ token });
   if (tokenValido) {
      res.json({ msg: 'Token válido y el Usuario existe' });
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};
export const nuevoPasswordAdministrativo = async (req, res) => {
   const { token } = req.params;
   const { password } = req.body;
   const administrativo = await Administrativo.findOne({ token });
   if (administrativo) {
      administrativo.password = password;
      administrativo.token = '';
      await administrativo.save();
      res.status(200).json('Contraseña actualizada correctamente');
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};
export const perfilAdministrativo = async (req, res) => {
   const { administrativo } = req;
   res.json(administrativo);
};
//crear Preceptor
export const crearPreceptor = async (req, res) => {
   const { id } = req.params;
   const administrativo = await Administrativo.findById(id);
   if (!administrativo) {
      const error = new Error('Administrativo no encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      const preceptor = await Preceptor.create(req.body);
      preceptor.token = generatorJWT(preceptor._id);
      preceptor.creadoPor = administrativo._id;
      await preceptor.save();
      //enviar el mail de confirmacion al preceptor

      res.status(200).json(preceptor);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}

// //? Agregar padre a la escuela
// export const agregarPadre = async (req, res) => {
//    const {id} = req.params;
//    const {email} = req.body;
//    const administrativo = await Administrativo.findById(id);
//    const padre = await Padre.findOne({email});
//    if (!administrativo) {
//       const error = new Error('Administrativo no encontrado');
//       return res.status(400).json({ error: error.message });
//    }
//    if (padre) {
//       const error = new Error('El padre ya esta agregado a la escuela');
//       return res.status(400).json({ error: error.message });
//    }
//    try {
//       const padre = await Padre.create(req.body);
//       padre.token = generarId();

//       administrativo.padreId.push(padre._id);
//       await Promise.all([padre.save(), administrativo.save()]);
//       //enviar mail de confirmacion
//       // await transporter.sendMail({
//       //    from: '"Fred Foo 👻" <
//       //    to: escuela.email, // list of receivers
//       //    subject: 'Hello ✔', // Subject line
//       //    text: 'Hello world?', // plain text body
//       //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
//       // });
//       res.status(201).json(padre);
//    }catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// }
// //? Agregar hijo a la escuela
// export const agregarAlumnos = async (req, res) => {
//    const {id} = req.params;
//    const {email} = req.body;
//    const administrativo = await Administrativo.findById(id);
//    // const escuela = await Administrativo
//    const alumno = await Alumno.findOne({email});
//    if (!administrativo) {
//       const error = new Error('Administrativo no encontrado');
//       return res.status(400).json({ error: error.message });
//    }
//    if (alumno) {
//       const error = new Error('El alumno ya esta agregado a la escuela');
//       return res.status(400).json({ error: error.message });
//    }
//    try {
//       const alumno = await Alumno.create(req.body);
//       alumno.creadoId = administrativo._id;
//       alumno.token = generarId();
//       administrativo.alumnoId.push(alumno._id);
//       await Promise.all([alumno.save(), administrativo.save()]);
//       //enviar mail de confirmacion
//       // await transporter.sendMail({
//       //    from: '"Fred Foo 👻" <
//       //    to: escuela.email, // list of receivers
//       //    subject: 'Hello ✔', // Subject line
//       //    text: 'Hello world?', // plain text body
//       //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
//       // });
//       res.status(201).json(alumno);
//    }catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// }
