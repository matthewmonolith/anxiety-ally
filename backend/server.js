import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import exposureRoutes from "./routes/exposureRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //form data

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/exposures", exposureRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => res.send("server is good"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server:${port}`));
