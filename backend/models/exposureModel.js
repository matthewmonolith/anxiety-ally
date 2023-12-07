import mongoose from 'mongoose'

const exposureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
      difficulty: {
        type: Number,
        required: true,
      },
      completed: {
        type:Boolean,
        required: true,
        default: false,
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

const Exposure = mongoose.model('Exposure', exposureSchema)

export default Exposure