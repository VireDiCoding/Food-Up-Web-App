import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("DB Connected"))
    .catch((err) => console.log("Connection Problem With Database"));   
}

// direct mongodb website thi connect nahi karta aa loko wbesite ma jaine laambi process karine project banavine connection string le 6
