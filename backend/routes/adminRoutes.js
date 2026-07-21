 import express from 'express';
import { 
  registerAdmin, 
  loginAdmin, 
  getUsers, 
  updateUser, 
  deleteUser, 
  getAdminLoginActivity // 1. Import the new controller
} from '../controllers/adminController.js';
import { verifyAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Protected — only a logged-in admin (valid JWT) can manage users & view login activities
router.get('/users', verifyAdminToken, getUsers);
router.put('/users/:id', verifyAdminToken, updateUser);
router.delete('/users/:id', verifyAdminToken, deleteUser);

// 2. Add this protected route to fetch the admin login activities
router.get('/admin-login-activity', verifyAdminToken, getAdminLoginActivity);

export default router;