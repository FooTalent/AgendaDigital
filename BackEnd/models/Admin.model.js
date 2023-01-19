import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
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
         trim: true,
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
      escuelasRegistradas: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Escuela',
         },
      ],
   },
   {
      timestamps: true,
   }
);
savePassword(AdminSchema);
comparePassword(AdminSchema);
const Admin = model('Admin', AdminSchema);
export default Admin;
