import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
      },
      text: {
        type:String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
});

const Post = mongoose.model('Post', postSchema)

export default Post