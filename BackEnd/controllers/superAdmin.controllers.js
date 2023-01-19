import Admin from '../models/Admin.model.js';
import generatorJWT from '../helpers/generatorJWT.js';
import generarId from '../helpers/generarId.js';
import { emailConfirm, emailModificacion } from '../helpers/sendEmail.js';

export const registrar = async (req, res) => {
   const { email } = req.body;
   const admin = await Admin.findOne({ email });
   if (admin) {
      const errorr = new Error('Admin already exists');
      return res.status(400).json({ error: errorr.message });
   }
   try {
      const admins = new Admin(req.body);
      admins.token = generarId();
      await admins.save();

      //enviar mail de confirmacion
      await emailConfirm(
         admins.name,
         admins.email,
         admins.token,
         'Comprueba tu cuenta en Aula Equis',
         'Aula Equis - Confirmacion de cuenta'
      );

      res.status(201).json({ message: 'Admin creado correctamente' });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const confirmar = async (req, res) => {
   const { token } = req.params;
   const admin = await Admin.findOne({ token });
   if (!admin) {
      const error = new Error('Admin not found');
      return res.status(400).json({ error: error.message });
   }
   try {
      admin.confirmado = true;
      admin.token = '';
      await admin.save();
      res.status(200).json('Admin confirmado correctamente');
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const autenticarAdmin = async (req, res) => {
   const { email, password } = req.body;
   const admin = await Admin.findOne({ email });
   if (!admin) {
      const error = new Error('Admin not found');
      return res.status(400).json({ error: error.message });
   }
   if (!admin.confirmado) {
      const error = new Error('Admin not confirmed');
      return res.status(400).json({ error: error.message });
   }

   if (await admin.comparePassword(password)) {
      res.json({
         _id: admin._id,
         name: admin.name,
         email: admin.email,
         role: admin.role,
         //guardar el token en la db
         token: generatorJWT(admin._id),
      });
   } else {
      const error = new Error('Password incorrect');
      return res.status(400).json({ error: error.message });
   }
};
export const modificarAdmin = async (req, res) => {
   const { id } = req.params;
   const existeAdmin = await Admin.findById(id);
   if (!existeAdmin) {
      const error = new Error('Admin no Encontrado');
      return res.status(400).json({ error: error.message });
   }
   existeAdmin.name = req.body.name;
   existeAdmin.email = req.body.email;
   existeAdmin.password = req.body.password;
   try {
      const admin = await existeAdmin.save();
      //enviar mail de modificacion
      await emailModificacion(
         admin.name,
         admin.email,
         'Modificacion de cuenta en Aula Equis',
         'Aula Equis - Modificacion de cuenta'
      );
      res.status(200).json(admin);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export const nuevosDatos = async (req, res) => {};
export const olvidePassword = async (req, res) => {
   const { email } = req.body;
   const admin = await Admin.findOne({ email });
   if (!admin) {
      const error = new Error('Admin no Encontrado');
      return res.status(400).json({ error: error.message });
   }
   try {
      admin.token = generarId();
      await admin.save();
      //enviar mail de confirmacion
      await emailResetPassword(
         admin.name,
         admin.email,
         admin.token,
         'Restablecer contraseña',
         'Aula Equis - Restablecer contraseña'
      );
      res.status(200).json(
         'Se ha enviado un mail para restablecer la contraseña'
      );
   } catch (error) {
      console.log(error);
   }
};

export const comprobarToken = async (req, res) => {
   const { token } = req.params;

   const tokenValido = await Admin.findOne({ token });
   if (tokenValido) {
      res.json({ msg: 'Token válido y el Usuario existe' });
   } else {
      const error = new Error('Token no válido');
      return res.status(404).json({ msg: error.message });
   }
};

export const nuevoPasword = async (req, res) => {
   const { token } = req.params;
   const { password } = req.body;
   const admin = await Admin.findOne({ token });
   if (admin) {
      admin.password = password;
      admin.token = '';
      try {
         await admin.save();
         res.status(200).json('Password cambiado correctamente');
      } catch (error) {
         console.log(error);
      }
   } else {
      const error = new Error('Token incorrecto');
      return res.status(404).json({ error: error.message });
   }
};
export const perfil = async (req, res) => {
   const { admin } = req;
   res.json(admin);
};
