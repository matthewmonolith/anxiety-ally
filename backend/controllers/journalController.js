import Journal from '../models/journalModel.js'
import User from '../models/userModel.js'

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

export {
    getJournal,
    createJournal
}