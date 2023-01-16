import express from 'express';
const router = express.Router();
import {
   deleteUser,
   getAllUsers,
   newAdmin,
   updateAdmin,
} from '../controllers/adminControllers.js';
router.post('/', newAdmin);
router.get('/', getAllUsers);
router.delete('/:idAdmin', deleteUser);
router.patch('/:idAdmin', updateAdmin);
export default router;
