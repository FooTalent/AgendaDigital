import jwt from 'jsonwebtoken';
import Administrativo from '../models/Administrativos.model.js';
import Escuela from '../models/Escuela.model.js';
import Admin from '../models/SuperAdmin.model.js';

export const checkAuth = async (req, res, next) => {
   let token;
   if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
   ) {
      try {
         token = req.headers.authorization.split(' ')[1];

         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         console.log('decoded: ', decoded);
         

         req.admin = await Admin.findById(decoded.id).select(
            '-password -confirmado -token -createdAt -updatedAt -__v'
         );
         req.escuela = await Escuela.findById(decoded.id).select(
            '-password -confirmado -token -createdAt -updatedAt -__v'
         );
         req.administrativo = await Administrativo.findById(decoded.id).select(
            '-password -confirmado -token -createdAt -updatedAt -__v'
         );
         //Todo: Check if this is needed
         // if (req.admin) {
         //    console.log('req.admin: ', req.admin);
         // } else if (req.escuela) {
         //    console.log('req.escuela: ', req.escuela);
         //    req.escuela = await Escuela.findById(decoded.id).select(
         //       '-password -confirmado -token -createdAt -updatedAt -__v'
         //    );
         // }

         return next();
      } catch (error) {
         return res.status(404).json({ msg: 'Hubo un error' });
      }
   }
   if (!token) {
      const error = new Error('Token no válido');
      return res.status(401).json({ msg: error.message });
   }

   next();
};
