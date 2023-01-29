import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import superAdminRoutes from './routes/superAdmin.routes.js';
import escuelasRoutes from './routes/escuelas.routes.js';
import administrativoRoutes from './routes/administrativo.routes.js';

import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
app.use('/api/admin', superAdminRoutes);
app.use('/api/escuela', escuelasRoutes);
app.use('/api/administrativo', administrativoRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
