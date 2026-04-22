import express from 'express';
import { registerAdmin, loginAdmin, getAdminProfile, logoutAdmin, getAdminStats } from '../controllers/adminController.js';
import { adminProtect } from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/logout', adminProtect, logoutAdmin);
router.get('/me', adminProtect, getAdminProfile);
router.get('/stats', adminProtect, getAdminStats);

export default router;
