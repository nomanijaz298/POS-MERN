import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import { connectDB } from "./config/config.js";
import itemRoute from "./routes/itemRoutes.js";
import userRoute from "./routes/userRoutes.js";
import billRoute from "./routes/billsRoute.js";

//rest api
const app = express();

//dotenv config
dotenv.config();

//connectDB config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/v1/items", itemRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/bills", billRoute);

//Port
const PORT = process.env.PORT || 8080;

//server listen

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`.bgBlue);
});
