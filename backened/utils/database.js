import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: ".././env",
  });

const URI = "mongodb://0.0.0.0:27017/Netflix"
const databaseConnection = () => {
    mongoose.connect(URI).then(()=>{
        console.log("database connected");
    }).catch((err) => {
       console.log(err);
    })
};

export default databaseConnection;