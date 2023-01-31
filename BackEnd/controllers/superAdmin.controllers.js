import Admin from '../models/SuperAdmin.model.js';
import generarId from '../helpers/generarId.js';
import {
   modificar,
   confirmar,
   autenticar,
   olvidePassword,
   comprobarToken,
   nuevoPasword,
} from '../helpers/controllers.js';
import { emailConfirm } from '../helpers/sendEmail.js';
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
export const confirmarAdmin = confirmar(Admin);
export const autenticarAdmin = autenticar(Admin);
export const modificarAdmin = modificar(Admin);
export const olvidePasswordAdmin = olvidePassword(Admin);
export const comprobarTokenAdmin = comprobarToken(Admin);
export const nuevoPaswordAdmnin = nuevoPasword(Admin);
export const perfil = async (req, res) => {
   const { admin } = req;
   res.json(admin);
};
export const traerEscuelas = async (req, res) => {
   const admins = await Admin.find().select('escuelasRegistradas');
   res.json(admins);
};
