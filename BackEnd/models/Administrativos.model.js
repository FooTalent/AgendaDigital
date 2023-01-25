import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
import {
   agregadoPorSubSchema,
   codigoPostalSubSchema,
   confirmadoSubSchema,
   direccionSubSchema,
   dniSubSchema,
   emailSubSchema,
   escuelaIdSubSchema,
   habilitadoSubSchema,
   lastNameSubSchema,
   localidadSubSchema,
   nameSubSchema,
   passwordSubSchema,
   provinciaSubSchema,
   telefonoSubSchema,
   tokenSubSchema,
} from './model.js';

const AdministrativosSchema = new Schema({
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
   escuelaId: escuelaIdSubSchema,
   rol: {
      type: String,
      value: 'Administrativo',
   },
   agregadoPor: agregadoPorSubSchema,
   preceptorId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Preceptor',
      },
   ],
});
savePassword(AdministrativosSchema);
comparePassword(AdministrativosSchema);
const Administrativo = model('Administrativo', AdministrativosSchema);
export default Administrativo;
