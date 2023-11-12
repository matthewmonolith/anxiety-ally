import mongoose from 'mongoose'

const journalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
      mood: {
        type: String,
        required: true,
      },
      intensity: {
        type: Number,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
});

const Journal = mongoose.model('Journal', journalSchema);

export default Journal;