import express from 'express';
const router = express.Router();
// const upload = require("../middleware/multer");
import upload from "../middleware/multer.js"
import { authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    // updateUserBio,
    uploadProfilePic,
    updateUserProfile
 } from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.put('/profile/:id', protect, upload.single("file"), uploadProfilePic);

export default router;