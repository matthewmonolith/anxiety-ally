import Exposure from "../models/exposureModel.js";
import User from "../models/userModel.js";
import { body, validationResult } from "express-validator";

const getExposures = async (req, res) => {
  try {
    console.log(req.user.id);
    const exposures = await Exposure.find({ user: req.user.id });
    res.json(exposures);
  } catch (error) {
    res.status(404);
    throw Error("Exposures not found");
  }
};

const createExposure = async (req, res) => {
  console.log(req.body)
  await body("title").trim().escape().notEmpty().run(req);
  await body("caption").trim().escape().notEmpty().run(req);
  await body("difficulty").isNumeric().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newExposure = new Exposure({
      title: req.body.title,
      caption: req.body.caption,
      difficulty: req.body.difficulty,
      completed: false,
      user: req.user.id,
    });
    const createdExposure = await newExposure.save();
    return res.status(201).json(createdExposure);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCompletion = async (req, res) => {
  try {
    await Exposure.findOneAndUpdate(
      { _id: req.params.id },
      {
        completed: true,
      }
    );
    console.log("Marked Complete");
    res.json("Marked Complete");
  } catch (error) {
    console.log(error);
  }
};

const deleteExposure = async (req, res) => {
  try {
    await Exposure.findByIdAndDelete({_id: req.params.id});
    console.log("Deleted exposure");
    res.json("Deletion of exposure successful");
  } catch (error) {
    console.log(error);
  }
};


export { getExposures, createExposure, updateCompletion, deleteExposure };
