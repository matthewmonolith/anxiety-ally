import express from 'express';
const router = express.Router();

import {
    getJournal,
    createJournal,
    deleteJournal
} from '../controllers/journalController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getJournal);
router.post("/", protect, createJournal);
router.delete("/:id", protect, deleteJournal);

export default router;