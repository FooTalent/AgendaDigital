import mongoose from 'mongoose';
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
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: 'admin',
      },
      userCreated: {
         type: Array,
         default: [],
      },
   },
   {
      timestamps: true,
   }
);
AdminSchema.pre('save', async function () {
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});
const Admin = model('Admin', AdminSchema);
export default Admin;
