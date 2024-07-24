import mongoose from "mongoose";

const uri = "mongodb+srv://sanjib52250:asdfghjkl@cluster0.yjesp2x.mongodb.net/clothingstore";

// establish database connection
const dbConnection = async () => {
  try {
  await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    console.log("Couldn't connect to database");
  }
}

export default dbConnection;