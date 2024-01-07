import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import cloudinary from "../middleware/cloudinary.js"
import Post from '../models/postModel.js'


//@desc     Auth User/Set token
//route     POST / api/users/auth
//@access   Public (no login to access route)
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
        });
    } else {
        res.status(401);
        throw new Error('invalid email or password'); //don't want for them to be able to see if a valid email exists
    }
});

//@desc     Register new user
//route     POST / api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
    console.log('register user called')
    let {username, email, password} = req.body;

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username,
        email,
        password,
    });

    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('invalid user data');
    }
});

//@desc     Logout user
//route     POST / api/users/logout
//@access   Public (no login to access route)
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly:true,
        expires: new Date(0),
    })
    res.status(200).json({ message: 'Logged out'});
});

//@desc     Get user profile
//route     GET / api/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
    // console.log('getuserprofile called')
    // const user = {
    //     _id: req.user._id,
    //     username: req.user.username,
    //     email: req.user.email
    // }
    // const posts = await Post.find({ user: req.user._id });
    // console.log(posts)
    // res.status(200).json({user, posts});
});

//@desc     Get user profile
//route     GET /users/profile
//@access   Private
const getUserPosts = asyncHandler(async (req, res) => {
    console.log('get userposts called')
    const posts = await Post.find({ user: req.user._id });
    console.log(posts)
    res.status(200).json(posts);
});


//@desc     Update User Profile
//route     PUT / api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
    console.log("updateduser called")
   const user = await User.findById(req.user._id);
   if(user){
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    user.bio = req.body.bio || user.bio

    if(req.body.password){
        user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        bio: updatedUser.bio,
        email: updatedUser.email
    })
    console.log(updatedUser)
   }else {
    res.status(404)
    throw new Error('user not found')
   }
});


//@desc     Update User Bio
//route     PUT / api/users/profile
//@access   Private
// const updateUserBio = async (req, res) => {
//     const user = await User.findById(req.user._id);
//     if(user){
//         user.bio = req.body.bio || user.bio

//         const updatedUser = await user.save()
//         res.status(200).json({
//           bio: updatedUser.bio
//         })

//     }else {
//      res.status(404)
//      throw new Error('user not found')
//     }
//  };
 


//@desc     Update User PFP
//route     PUT / api/users/profile
//@access   Private
const uploadProfilePic = async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      await User.findOneAndUpdate({_id:req.params.id}, {
        profilePicture: result.secure_url,
        pfpCloudinaryId: result.public_id
      });
      console.log("Profile picture has been added!");
      res.status(200);
    } catch (error) {
      console.log(error)
    }
  }


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    // updateUserBio,
    getUserPosts,
    uploadProfilePic
};