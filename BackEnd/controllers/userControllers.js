import User from '../models/User.js';
import generatorJWT from '../helpers/generatorJWT.js';
const newUser = async (req, res) => {
   const { email } = req.body;
   const existsUser = await User.findOne({ email });

   if (existsUser) {
      const error = new Error('User already exists');
      return res.status(400).json({ error: error.message });
   }
   try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
   } catch (error) {
      console.log(error);
   }
};
const login = async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (!user) {
      const error = new Error('User not found');
      return res.status(400).json({ error: error.message });
   }
   const isMatch = await user.matchPassword(password);
   if (!isMatch) {
      const error = new Error('Invalid credentials');
      return res.status(400).json({ error: error.message });
   } else {
      res.status(200).json({
         user: user, 
         token: generatorJWT(user._id) });
   }
};
export { newUser, login };
