import express from 'express';
const router = express.Router();
import { login, newUser } from '../controllers/userControllers.js';
router.post('/', newUser);
router.post('/login', login);
export default router;
