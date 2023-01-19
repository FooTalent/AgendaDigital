import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
const EscuelaSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      trim: true,
   },
   telefono: {
      type: String,
      required: true,
      default: 'Sin telefono',
   },
   direccion: {
      type: String,
      required: true,
      default: 'Sin direccion',
   },
   role: {
      type: String,
      default: 'Escuela',
   },
   administrativoId: [
      {
         type: Schema.Types.ObjectId,
         ref: 'Administrativo',
      },
   ],
   preceptorId: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Preceptor' 
   }],
   // profesoresId: {
   //    type: array,
   //    default: [],
   // },
   // alumnosId: {
   //    type: array,
   //    default: [],
   // },
   // padreId: {
   //    type: array,
   //    default: [],
   // },
   token: {
      type: String,
   },
   confirmado: {
      type: Boolean,
      default: false,
   },
});

EscuelaSchema;
savePassword(EscuelaSchema);
comparePassword(EscuelaSchema);
const Escuela = model('Escuela', EscuelaSchema);
export default Escuela;
