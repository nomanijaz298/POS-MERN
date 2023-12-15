import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";
import itemModel from "./models/itemModel.js";
import { items } from "./utils/data.js";
import colors from "colors";

//config
dotenv.config();
connectDB();

//function seeder
const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log(`All items added `.bgGreen);
  } catch (error) {
    console.log(`Error in add items`.bgRed);
  }
};

importData();
