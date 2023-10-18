import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();

// Search for users by name
router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    // Perform a case-insensitive search by name
    // const users = await User.find({ name: { $regex: new RegExp(name, 'i') } });
    
    const users = await User.find({
      $or: [
        { name: { $regex: new RegExp(name, 'i') } },
        { class: { $regex: new RegExp(name, 'i') } }
      ]
    });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error searching for users:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Retrieve a user's profile by ID
router.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;
