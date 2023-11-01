import express from "express"
import dotenv from "dotenv"
import path from "path"
import conectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleWare.js";
import userRouter from "./routes/userRoutes.js";
import socialIconRouter from "./routes/socialIconRoute.js"
import cookieParser from "cookie-parser";
import typoRouter from "./routes/typoRoutes.js";
import aboutRouter from "./routes/aboutRoutes.js";
import workExpRouter from "./routes/workExpRoutes.js";
import skillRouter from "./routes/skillRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
const app = express()
dotenv.config();
conectDB();

const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cookieParser())
app.use("/api/user", userRouter)
app.use("/api/socialicon", socialIconRouter)
app.use("/api/typo", typoRouter)
app.use("/api/about", aboutRouter)
app.use("/api/workExp", workExpRouter)
app.use("/api/skill", skillRouter)
app.use("/api/project", projectRouter)
app.use("/api/contact", contactRouter)

const __dirname = path.resolve()
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));




if (process.env.NODE_ENV === "production") {
    // const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, "frontend", "build")))
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})