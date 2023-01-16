import express from 'express';
const router = express.Router();
import {
   deleteUser,
   getAllUsers,
   newAdmin,
   updateAdmin,
   updateUser
} from '../controllers/adminControllers.js';
router.post('/', newAdmin);
router.get('/', getAllUsers);
router.delete('/deleteUser/:iduser', deleteUser);
router.patch('/:idAdmin', updateAdmin);
router.patch('/updateUser/:iduser',updateUser)
export default router;
