import express from 'express';
const router = express.Router();


import {
    getComments,
    createComment
} from '../controllers/commentControllers.js'

import {protect} from '../middleware/authMiddleware.js'

router.post("/", protect, createComment);
router.get("/:id", protect, getComments);


export default router;
