import express from 'express';
const router = express.Router();

import {
    getExposures,
    createExposure,
    updateCompletion

} from '../controllers/exposureController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getExposures);
// router.get("/:id", protect, getPost);
router.post("/", protect, createExposure);
router.put("/:id", protect, updateCompletion)
// router.delete("/", protect, deleteExposure);
// router.post("/like/:id", protect, likeExposure);

export default router;