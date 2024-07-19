//step 1 server create
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
  path: ".env",
});

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin:'http://localhost:5173',
  credentials:true
}
app.use(cors(corsOptions));

//api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, (err) => {
  console.log(`Server is working at ${process.env.PORT}`);
});
