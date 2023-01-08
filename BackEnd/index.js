import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();
connectDB();
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
