import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
const PreceptorSchema = new Schema({
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
   dni: {
      type: String,
      required: true,
      unique: true,
   },
   escuelaId: {
      type: Schema.Types.ObjectId,
      ref: 'Escuela',
   },

   creadoPor: {
      type: Schema.Types.ObjectId,
      ref: 'Administrativo',
   },
   role: {
      type: String,
      default: 'Preceptor',
   },
   token: {
      type: String,
   },
   confirmado: {
      type: Boolean,
      default: false,
   },
});

savePassword(PreceptorSchema);
comparePassword(PreceptorSchema);
const Preceptor = model('Preceptor', PreceptorSchema);
export default Preceptor;
