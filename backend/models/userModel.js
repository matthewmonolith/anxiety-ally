import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "user bio...",
    },
    profilePicture: { type: String, sparse: true },
    pfpCloudinaryId: { type: String, sparse: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    //this refers to the user being created in the controller
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  //add matchpassword method to the user
  return await bcrypt.compare(enteredPassword, this.password); //does entered pass match the hashed password in the user document
};

const User = mongoose.model("User", userSchema);

export default User;
