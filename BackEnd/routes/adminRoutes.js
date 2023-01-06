import express from 'express';
const router = express.Router();
import {
   deleteUser,
   getAllUsers,
   newAdmin,
} from '../controllers/adminControllers.js';
router.post('/', newAdmin);
router.get('/', getAllUsers);
router.delete('/:idAdmin', deleteUser);
export default router;
