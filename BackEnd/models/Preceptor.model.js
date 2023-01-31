import { Schema, model } from 'mongoose';
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
const PreceptorSchema = new Schema({
   
   name: nameSubSchema,
   lastName: lastNameSubSchema,
   dni: dniSubSchema,
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
      value: 'Preceptor',
   },
   agregadoPor: agregadoPorSubSchema,
});

savePassword(PreceptorSchema);
comparePassword(PreceptorSchema);
const Preceptor = model('Preceptor', PreceptorSchema);
export default Preceptor;
