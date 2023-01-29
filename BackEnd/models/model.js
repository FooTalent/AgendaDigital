import { Schema, model } from 'mongoose';
export const tokenSubSchema = {
   type: String,
};
export const nameSubSchema = {
   type: String,
   required: true,
};
export const lastNameSubSchema = {
   type: String,
};
export const emailSubSchema = {
   type: String,
   required: true,
   unique: true,
};
export const passwordSubSchema = {
   type: String,
   trim: true,
};
export const confirmadoSubSchema = {
   type: Boolean,
   default: false,
};
export const telefonoSubSchema = {
   type: String,
   default: 'Sin telefono',
};
export const direccionSubSchema = {
   type: String,
   default: 'Sin direccion',
};
export const dniSubSchema = {
   type: String,
};
export const habilitadoSubSchema = {
   type: Boolean,
   default: true,
};
export const agregadoPorSubSchema = {
   type: Schema.Types.ObjectId,
   ref: 'Administrativo' || 'Escuela',
};
export const codigoPostalSubSchema = {
   type: String,
};
export const localidadSubSchema = {
   type: String,
};
export const provinciaSubSchema = {
   type: String,
};

export const escuelaIdSubSchema = {
   type: Schema.Types.ObjectId,
   ref: 'Escuela',
};
