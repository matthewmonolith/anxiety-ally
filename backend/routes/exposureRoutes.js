import express from 'express';
const router = express.Router();

import {
    getExposures,
    createExposure

} from '../controllers/exposureController.js'

import {protect} from '../middleware/authMiddleware.js'


router.get("/", protect, getExposures);
// router.get("/:id", protect, getPost);
router.post("/", protect, createExposure);
// router.delete("/", protect, deleteExposure);
// router.post("/like/:id", protect, likeExposure);

export default router;