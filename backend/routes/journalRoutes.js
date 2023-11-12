import express from 'express';
const router = express.Router();

import {
    getJournal,
    createJournal
} from '../controllers/journalController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getJournal);
// router.get("/:id", protect, getPost);
router.post("/", protect, createJournal);
// router.delete("/", protect, deleteExposure);
// router.post("/like/:id", protect, likeExposure);

export default router;