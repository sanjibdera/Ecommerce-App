import productModel from '../models/productModel.js'
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const uploadImages = async (fileName) => {
  try {
    if (fileName) {
     const uploadResult = await cloudinary.uploader
     .upload(`./uploads/${fileName}`, {resource_type: 'auto'})
      fs.unlinkSync(`./uploads/${fileName}`);
      return (uploadResult.url);
    }
  } catch (error) {
    console.log(error);
  }
}

const addProduct = async (req, res) => {
  let image_path = `${req.file.filename}`

  const image_filename = await uploadImages(image_path);

  const product = new productModel({
    title: req.body.title,
    offer_price: req.body.offer_price,
    original_price: req.body.original_price,
    category: req.body.category,
    image: image_filename,
    display: req.body.display,
  })
  try {
    await product.save();
    res.json({success: true, message: "Product added successfully"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Couldn't add the product"})
  }
}

const getProduct = async (req, res) => {
  try {
    const productData = await productModel.find({});
    res.json({success: true, data: productData})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"})
  }
}

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.itemId);
    res.json({success: true, message: "Product removed successfully"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Couldn't remove the product"})
  }
}


const updateProduct = async (req, res) => {
  
  let image_path = `${req.file.filename}`
  const image_filename = await uploadImages(image_path);
  
  try {
    const productData = await productModel.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      offer_price: req.body.offer_price,
      original_price: req.body.original_price,
      category: req.body.category,
      image: image_filename,
      display: req.body.display,
    });
    res.json({success: true, message: "Product updated successfully"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Couldn't update the product"})
  }
}

export {addProduct, getProduct, removeProduct, updateProduct}