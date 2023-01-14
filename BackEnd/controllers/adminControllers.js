import Admin from '../models/Admin.js';
import User from '../models/User.js';
const newAdmin = async (req, res) => {
   const { email } = req.body;
   const admin = await Admin.findOne({ email });
   if (admin) {
      const errorr = new Error('Admin already exists');
      return res.status(400).json({ error: errorr.message });
   }
   try {
      const admins = new Admin(req.body);
      const savedAdmin = await admins.save();
      res.status(201).json(savedAdmin);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
const getAllUsers = async (req, res) => {
   try {
      const users = await User.find({});
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
const deleteUser = async (req, res) => {
   const { idUser } = req.body;
   const { idAdmin } = req.params;
   const user = await User.findById(idUser);
   const admin = await Admin.findById(idAdmin);
   console.log(admin);
   if (!user) {
      const error = new Error('User not found');
      return res.status(400).json({ error: error.message });
   }
   if (admin === null) {
      const error = new Error('Invalid credentials');
      return res.status(400).json({ error: error.message });
   }
   try {
      await User.findByIdAndRemove(idUser);
      res.json({ message: 'User deleted successfully' });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
const updateAdmin = async (req, res) => {
   const { idAdmin } = req.params;
   const admin = await Admin.findById(idAdmin);
   if (!admin) {
      const error = new Error('Admin not found');
      return res.status(400).json({ error: error.message });
   }
   try {
      const updatedAdmin = await Admin.findByIdAndUpdate(idAdmin, req.body, {
         new: true,
      });
      res.json(updatedAdmin);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
export { newAdmin, getAllUsers, deleteUser, updateAdmin };
