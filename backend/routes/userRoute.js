import express from "express"
import { signin, signup } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register", signup)
userRouter.post("/login", signin)

export default userRouter;