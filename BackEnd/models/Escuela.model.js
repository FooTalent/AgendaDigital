import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
import {
   confirmadoSubSchema,
   direccionSubSchema,
   emailSubSchema,
   habilitadoSubSchema,
   nameSubSchema,
   passwordSubSchema,
   telefonoSubSchema,
} from './model.js';
const EscuelaSchema = new Schema({
   name: nameSubSchema,
   email: emailSubSchema,
   password: passwordSubSchema,
   telefono: telefonoSubSchema,
   direccion: direccionSubSchema,
   habilitado: habilitadoSubSchema,
   rol: {
      type: String,
      default: 'Escuela',
   },
   administrativoId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Administrativo',
      },
   ],
   preceptorId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Preceptor',
      },
   ],
   profesorId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Profesor',
      },
   ],alumnoId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Alumno',
      },
      
   ],
   padreId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Padre',
      },
      
   ],
   token: {
      type: String,
   },
   confirmado: confirmadoSubSchema,
});

EscuelaSchema;
savePassword(EscuelaSchema);
comparePassword(EscuelaSchema);
const Escuela = model('Escuela', EscuelaSchema);
export default Escuela;
