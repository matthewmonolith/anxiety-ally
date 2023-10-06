const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }],
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