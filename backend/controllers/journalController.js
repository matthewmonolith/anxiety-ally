import Journal from '../models/journalModel.js'
import User from '../models/userModel.js'
import { body, validationResult } from "express-validator";

const getJournal = async (req, res) => {
    try {
        console.log(req.user.id)
        const journals = await Journal.find({ user: req.user.id })
        res.json(journals)
    } catch (error) {
        res.status(404)
        throw Error('Journals not found')
    }
}

const createJournal = async (req, res) => {
    await body("title").trim().escape().notEmpty().run(req);
    await body("caption").trim().escape().notEmpty().run(req);
    await body("mood").trim().escape().notEmpty().run(req);
    await body('intensity').isNumeric().notEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newJournal = new Journal({
            title: req.body.title,
            caption: req.body.caption,
            mood: req.body.mood,
            intensity: req.body.intensity,
            user: req.user.id
        })
        const createdJournal = await newJournal.save()
        return res.status(201).json(createdJournal)
    } catch (error) {
        console.log(error)
        throw error
    }
}

const deleteJournal = async (req, res) => {
    try {
      await Journal.findByIdAndDelete({_id: req.params.id});
      console.log("Deleted journal");
      res.json("Deletion of journal successful");
    } catch (error) {
      console.log(error);
    }
  };
  

export {
    getJournal,
    createJournal,
    deleteJournal
}