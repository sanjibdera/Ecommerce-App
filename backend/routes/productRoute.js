import express from 'express'
import { addProduct, getProduct, removeProduct, updateProduct } from '../controllers/productController.js'
import multer from 'multer'

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage: storage})


productRouter.post("/add", upload.single("image"), addProduct)
productRouter.post("/update", upload.single("image"), updateProduct)
productRouter.get("/get", getProduct)
productRouter.post("/remove", removeProduct)


export default productRouter;