import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  offer_price: {type: Number, required: true},
  original_price: {type: Number, required: true},
  image: {type: String, required: true},
  display: {type: String, required: true},
  category: {type: String, required: true},
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;