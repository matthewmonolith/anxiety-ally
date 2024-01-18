import Comment from "../models/commentModel.js";
import User from "../models/userModel.js";
import Post from "../models/postModel.js";
import { body, validationResult } from "express-validator";


const getComments = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const comments = await Comment.find({ post: req.params.id });
    res.json(comments);
  } catch (error) {
    res.status(404).json({ error: "Comments not found" });
  }
};

const createComment = async (req, res) => {
  // Validate and sanitize inputs
  await body("commentBody").trim().escape().notEmpty().run(req);
  await body("postId").trim().escape().notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // const username = User.find(req.user.id)
    const newComment = new Comment({
      comment: req.body.commentBody,
      post: req.body.postId,
      user: req.user.id,
    });

    const createdComment = await newComment.save();
    return res.status(201).json(createdComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getComments, createComment };
