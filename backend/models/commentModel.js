import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment