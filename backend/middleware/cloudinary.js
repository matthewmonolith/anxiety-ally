import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

const { v2: cloudinaryV2 } = cloudinary;

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
