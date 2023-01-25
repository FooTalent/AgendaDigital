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
const AlumnoSchema = new Schema({
   name: nameSubSchema,
   lastName: lastNameSubSchema,
   dni: dniSubSchema,
   email: emailSubSchema,
   password: passwordSubSchema,
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
      value: 'Alumno',
   },
   agregadoPor: agregadoPorSubSchema,
   genero: {
      type: String,
   },
   fechaNacimiento: {
      type: String,
   },
   nacionalidad: {
      type: String,
   },
   legajo: {
      type: String,
      unique: true,
   },
   observaciones: {
      type: String,
   },
   padres: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Padre',
      },
   ],
   escuelaId: {
      type: Schema.Types.ObjectId,
      ref: 'Escuela',
   },
   preceptorId: {
      type: Schema.Types.ObjectId,
      ref: 'Preceptor',
   },

   clases: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Clase',
      },
   ],
   profesores: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Profesor',
      },
   ],
   asistencia: [
      {
         type: Schema.Types.ObjectId,
         // ref: 'Asistencia',
      },
   ],
   notas: [
      {
         type: Schema.Types.ObjectId,
         // ref: 'Nota',
      },
   ],
   tareas: [
      {
         type: Schema.Types.ObjectId,
         // ref: 'Tarea',
      },
   ],
   calificaciones: [
      {
         type: Schema.Types.ObjectId,
         // ref: 'Calificacion',
      },
   ],
   faltas: [
      {
         type: Schema.Types.ObjectId,
         // ref: 'Falta',
      },
   ],
});
savePassword(AlumnoSchema);
comparePassword(AlumnoSchema);
const Alumno = model('Alumno', AlumnoSchema);
export default Alumno;
