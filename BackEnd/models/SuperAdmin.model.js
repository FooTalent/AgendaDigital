import { Schema, model } from 'mongoose';
import { comparePassword, savePassword } from '../helpers/functionBcrypt.js';
import {
   confirmadoSubSchema,
   emailSubSchema,
   nameSubSchema,
   passwordSubSchema,
} from './model.js';
const AdminSchema = new Schema(
   {
      name: nameSubSchema,
      email: emailSubSchema,
      password: passwordSubSchema,
      role: {
         type: String,
         default: 'admin',
      },
      token: {
         type: String,
      },
      confirmado: confirmadoSubSchema,
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
