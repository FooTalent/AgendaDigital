import bcrypt from 'bcrypt';
//funcion que comprueba si la contraseña es correcta o no con bcrypt compare

export const comparePassword = (schema) => {
   schema.methods.comparePassword = async function (password) {
      return await bcrypt.compare(password, this.password);
   };
};
export const savePassword = (schema) => {
   schema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next();
   }
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
})};
