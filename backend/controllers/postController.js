import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import Comment from "../models/commentModel.js";

// //@desc     Get posts from all
// //route     GET / api/posts/
// //@access   Private
const getCommunity = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).lean();
  res.json(posts);
});

// //@desc     Get post
// //route     GET / api/posts/:id
// //@access   Private
const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    // console.log(post);
    return res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
};

//@desc     Create post
//route     POST / api/posts/
//@access   Private
const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      caption: req.body.caption,
      likes: 0,
      user: req.user.id,
    });
    const createdPost = await newPost.save();
    return res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//@desc     DELETE single post
//route     DELETE / api/posts/:id
//@access   Private
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete({ _id: req.params.id });
    await Comment.deleteMany({ post: req.params.id });
    console.log("Deleted post");
    res.json("Deletion of post and comments successful");
  } catch (error) {
    console.log(error);
  }
};

//@desc     Like single post
//route     POST / api/posts/:id
//@access   Private
// const likePost = asyncHandler(async (req, res) => {
//     try {
//         User.findOne({  user: req.user.id }).then(user => {
//             Post.findById(req.params.id).then(post => {
//                 if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
//                     return res.status(400).json({alreadyliked: "User liked this post"})
//                 } //filter, so if it's already in the array it'll be 1, thus already liked it

//                 //Add user
//                 post.likes.unshift({user: req.user.id});

//                 post.save().then(post => res.json(post))
//             })
//         })
//     } catch (err) {
//         return res.status(404).json({postnotfound: 'no post found'})
//     }
// })
const likePost = async (req, res) => {
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } });
    res.json("Post updated!");
  } catch (err) {
    return res.status(404).json({ postnotfound: "no post found" });
  }
};

export { getCommunity, getPost, createPost, deletePost, likePost };
