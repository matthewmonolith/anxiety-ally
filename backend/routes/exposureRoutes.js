import express from 'express';
const router = express.Router();

import {
    getExposures,
    createExposure,
    updateCompletion,
    deleteExposure

} from '../controllers/exposureController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getExposures);
router.post("/", protect, createExposure);
router.put("/:id", protect, updateCompletion)
router.delete("/:id", protect, deleteExposure);

export default router;