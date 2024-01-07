import express from 'express';
const router = express.Router();
// const upload = require("../middleware/multer");
import upload from "../middleware/multer.js"
import { authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    uploadProfilePic,
    updateUserProfile,
    getUserPosts
 } from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserPosts);
router.put('/update', protect, updateUserProfile);
router.put('/users/:id', protect, upload.single("file"), uploadProfilePic);

export default router;