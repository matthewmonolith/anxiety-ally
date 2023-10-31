import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'
import User from '../models/userModel.js'
const cloudinary = require("../middleware/cloudinary");

// //@desc     Get posts from all
// //route     GET / api/posts/
// //@access   Private
const getCommunity = asyncHandler(async (req, res) => {
    const posts = await Post.find().lean()
    res.json(posts)
})


// //@desc     Get post
// //route     GET / api/posts/:id
// //@access   Private
const getPost = asyncHandler(async (req, res) => {
    const post =  await Post.findById(req.params.id)
    if(post){
       return res.json(post)
    }else {
        res.status(404)
        throw new Error('Post not found')
    }
})


//@desc     Create post
//route     POST / api/posts/createpost
//@access   Private
const createPost = asyncHandler(async (req, res) => {
        const result = await cloudinary.uploader.upload(req.file.path)
        const newPost = new Post({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
        })
        const createdPost = await newPost.save()
        return res.status(201).json(createdPost)
})


//@desc     DELETE single post
//route     DELETE / api/posts/:id
//@access   Private
const deletePost = asyncHandler(async (req, res) => {
    try {
        User.findOne({  user: req.user.id }).then(user => {
            Post.findById(req.params.id).then(post => {
                //check post's owner
                if(post.user.toString() !== req.user.id){ //note user not a string, so need to convert to string
                    return res.status(401).json({notauthorised: 'user not authorised'})
                }
    
                //delete
                post.remove().then(() => res.json({success: true}))
            })
        })
    } catch (err) {
        return res.status(404).json({postnotfound: 'no post found'})
    }
})

//@desc     Like single post
//route     POST / api/posts/:id
//@access   Private
const likePost = asyncHandler(async (req, res) => {
    try {
        User.findOne({  user: req.user.id }).then(user => {
            Post.findById(req.params.id).then(post => {
                if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
                    return res.status(400).json({alreadyliked: "User liked this post"})
                } //filter, so if it's already in the array it'll be 1, thus already liked it

                //Add user
                post.likes.unshift({user: req.user.id});

                post.save().then(post => res.json(post))
            })
        })
    } catch (err) {
        return res.status(404).json({postnotfound: 'no post found'})
    }
})

export {
    getCommunity,
    getPost,
    createPost,
    deletePost,
    likePost
}
