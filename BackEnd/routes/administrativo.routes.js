import express from 'express';
import { registrarAdministrativo } from '../controllers/administrativo.controllers.js';
const router = express.Router();

router.post('/', registrarAdministrativo);

export default router;
