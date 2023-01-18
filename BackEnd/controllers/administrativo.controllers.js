import generarId from '../helpers/generarId.js';
import generatorJWT from '../helpers/generatorJWT.js';
import Administrativo from '../models/Administrativos.model.js';
import Escuela from '../models/Escuela.model.js';
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
export const comprobarTokenAdministrativo = async (req, res) => {
    const { token } = req.params;
    const tokenValido = await Administrativo.findOne({token });
    if (tokenValido) {
       res.json({ msg: 'Token válido y el Usuario existe' });
    } else {
       const error = new Error('Token no válido');
       return res.status(404).json({ msg: error.message });
    }
}
export const  nuevoPasswordAdministrativo = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const administrativo = await Administrativo.findOne({ token });
    if(administrativo){
         administrativo.password = password;
         administrativo.token = '';
         await administrativo.save();
         res.status(200).json('Contraseña actualizada correctamente');
    }else{
            const error = new Error('Token no válido');
            return res.status(404).json({ msg: error.message });
    }
}
export const  perfilAdministrativo = async (req, res) => {
    const { administrativo } = req;
    res.json(administrativo)
}