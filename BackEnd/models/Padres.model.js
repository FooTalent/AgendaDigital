import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
import {
   agregadoPorSubSchema,
   codigoPostalSubSchema,
   confirmadoSubSchema,
   dniSubSchema,
   emailSubSchema,
   habilitadoSubSchema,
   lastNameSubSchema,
   localidadSubSchema,
   nameSubSchema,
   passwordSubSchema,
   provinciaSubSchema,
   telefonoSubSchema,
   tokenSubSchema,
} from './model.js';
const PadresSchema = new Schema({
   name: nameSubSchema,
   lastName: lastNameSubSchema,
   email: emailSubSchema,
   password: passwordSubSchema,
   dni: dniSubSchema,
   token: tokenSubSchema,
   confirmado: confirmadoSubSchema,
   telefono: telefonoSubSchema,
   direccion: direccionSubSchema,
   habilitado: habilitadoSubSchema,
   codigoPostal: codigoPostalSubSchema,
   localidad: localidadSubSchema,
   provicia: provinciaSubSchema,
   rol: {
      type: String,
      value: 'Padre',
   },
   agregadoPor: agregadoPorSubSchema,
   genero: {
      type: String,
   },
   hijos: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Alumno',
      },
   ],
});
savePassword(PadresSchema);
comparePassword(PadresSchema);
const Padre = model('Padre', PadresSchema);
export default Padre;
