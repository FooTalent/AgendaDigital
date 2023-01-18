
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
const AdminSchema = new Schema(
   {
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
         trim:true
      },
      role: {
         type: String,
         default: 'admin',
      },
      token: {
         type: String,
      },
      confirmado: {
         type: Boolean,
         default: false,
      },
      escuelasRegistradas: {
         type: Array,
         default: [],
      },
   },
   {
      timestamps: true,
   }
);
AdminSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
     next();
   }
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});
AdminSchema.methods.comprobarPassword = async function (passwordFormulario) {
   return await bcrypt.compare(passwordFormulario, this.password);
};
const Admin = model('Admin', AdminSchema);
export default Admin;
