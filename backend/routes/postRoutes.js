import express from 'express';
const router = express.Router();
const upload = require("../middleware/multer");


import {
    getCommunity,
    createPost,
    getPost,
    deletePost,
    likePost
} from '../controllers/postController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getCommunity);
router.get("/:id", protect, getPost);
router.post("/createPost", protect, upload.single("file"), createPost);
router.delete("/deletePost", protect, deletePost)
router.post("/like/:id", protect, likePost)

export default router;
