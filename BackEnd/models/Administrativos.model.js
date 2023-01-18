import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const AdministrativosSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   dni: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      trim: true,
   },
   escuelaId: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      default: 'Administrativo',
   },
   token: {
      type: String,
   },
   confirmado: {
      type: Boolean,
      default: false,
   },
});
AdministrativosSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next();
   }
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});
AdministrativosSchema.methods.comprobarPassword = async function (
   passwordFormulario
) {
   return await bcrypt.compare(passwordFormulario, this.password);
};
const Administrativo = model('Administrativo', AdministrativosSchema);
export default Administrativo;
