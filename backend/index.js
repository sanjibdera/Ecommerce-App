import express from "express"
import cors from "cors"
import 'dotenv/config'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import dbConnection from "./config/dbConnection.js"


const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// database connection
dbConnection();

// api endpoints
app.use("/product", productRouter)
app.use("/user", userRouter)
app.use("/cart", cartRouter)
app.use("/image", express.static('uploads'))


// sending response
app.get("/",(req,res)=>{
  res.send("Server is Working")
})

// defining the port
app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`);
})