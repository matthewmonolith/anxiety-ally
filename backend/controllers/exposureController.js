import Exposure from "../models/exposureModel.js";
import User from "../models/userModel.js";

// module.exports = {
//     getExposures: async (req, res) => {
//         try {
//           const exposures = await Exposure.find({ user: req.user.id });
//           res.json(exposures);
//         } catch (err) {
//           console.log(err);
//         }
//       },

// }

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

export { getExposures, createExposure, updateCompletion };
