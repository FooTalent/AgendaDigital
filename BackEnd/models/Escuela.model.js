import  { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

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
      }
   ],
   // presectorialId: {
   //    type: array,
   //    default: [],
   // },
   // profesoresId: {
   //    type: array,
   //    default: [],
   // },
   // alumnosId: {
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

EscuelaSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next();
   }
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});
EscuelaSchema.methods.comprobarPassword = async function (passwordFormulario) {
   return await bcrypt.compare(passwordFormulario, this.password);
};
const Escuela = model('Escuela', EscuelaSchema);
export default Escuela;
