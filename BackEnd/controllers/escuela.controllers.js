import Escuela from '../models/Escuela.model.js';
import generatorJWT from '../helpers/generatorJWT.js';
import generarId from '../helpers/generarId.js';
import Admin from '../models/Admin.model.js';
export const registrarEscuela = async (req, res) => {
   const { email } = req.body;
   const existeEscuela = await Escuela.findOne({ email });
   const admin = await Admin.find();
   if (existeEscuela) {
      const error = new Error('Ya hay una escuela registrada con ese email');
      return res.status(400).json({ error: error.message });
   }
   try {
      const escuela = new Escuela(req.body);
      escuela.token = generarId();
      await escuela.save();
      //enviar mail de confirmacion
      // await transporter.sendMail({
      //    from: '"Fred Foo 👻" <
      //    to: escuela.email, // list of receivers
      //    subject: 'Hello ✔', // Subject line
      //    text: 'Hello world?', // plain text body
      //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
      // });
      admin.forEach(async (ad) => {
         await Admin.findByIdAndUpdate(ad._id, {
            $push: { escuelasRegistradas: escuela._id },
         });
      });
      res.status(201).json(escuela);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const confirmarEscuela = async (req, res) => {
   const { token } = req.params;
   const escuela = await Escuela.findOne({ token });
   if (!escuela) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   try {
      escuela.confirmado = true;
      escuela.token = '';
      await escuela.save();
      res.status(200).json('Escuela confirmada correctamente');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const autenticarEscuela = async (req, res) => {
   const { email, password } = req.body;
   const escuela = await Escuela.findOne({ email });
   if (!escuela) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   if (!escuela.confirmado) {
      const error = new Error('Escuela no confirmada');
      return res.status(400).json({ error: error.message });
   }
   if (await escuela.comprobarPassword(password)) {
      res.json({
         _id: escuela._id,
         name: escuela.name,
         email: escuela.email,
         token: generatorJWT(escuela._id),
      });
   } else {
      const error = new Error('Contraseña incorrecta');
      return res.status(400).json({ error: error.message });
   }
};
export const modificarEscuela = async (req, res) => {
   const { id } = req.params;
   const existeEscuela = await Escuela.findById(id);

   if (!existeEscuela) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   existeEscuela.name = req.body.name;
   existeEscuela.email = req.body.email;
   existeEscuela.password = req.body.password;
   existeEscuela.telefono = req.body.telefono;
   existeEscuela.direccion = req.body.direccion;
   try {
      const escuela = await Escuela.findByIdAndUpdate(id, existeEscuela, {
         new: true,
      });

      res.status(200).json({
         message: 'Escuela modificada correctamente',
         escuela,
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const olvidePasswordEscuela = async (req, res) => {
   const { email } = req.body;
   const escuela = await Escuela.findOne({ email });
   if (!escuela) {
      const error = new Error('Escuela no encontrada');
      return res.status(400).json({ error: error.message });
   }
   try {
      escuela.token = generarId();
      await escuela.save();
      //enviar mail de confirmacion
      // await transporter.sendMail({
      //    from: '"Fred Foo 👻" <
      //    to: escuela.email, // list of receivers
      //    subject: 'Hello ✔', // Subject line
      //    text: 'Hello world?', // plain text body
      //    html: `<b>http://localhost:3000/confirmar/${escuelas.token}</b>`, // html body
      // });
      res.status(200).json(
         'Se ha enviado un mail para restablecer la contraseña'
      );
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const comprobarTokenEscuela = async (req, res) => {
   const { token } = req.params;
   const tokenValido = await Escuela.findOne({ token });
   if (tokenValido) {
      res.json({ msg: 'Token válido y el Usuario existe' });
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};
export const nuevoPasswordEscuela = async (req, res) => {
   const { token } = req.params;
   const { password } = req.body;
   const escuela = await Escuela.findOne({ token });
   if (escuela) {
      escuela.password = password;
      escuela.token = '';
      await escuela.save();
      res.json({ msg: 'Contraseña actualizada correctamente' });
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};
export const perfilEscuela = async (req, res) => {
   const { escuela } = req;
   res.json(escuela);
};
