import express from 'express';
const router = express.Router();

import {
    getCommunity,
    createPost,
    getPost,
    deletePost,
    likePost
} from '../controllers/postController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", getCommunity);
router.get("/:id", protect, getPost);
router.post("/", protect, createPost);
router.delete("/deletePost", protect, deletePost)
router.post("/like/:id", protect, likePost)

export default router;
