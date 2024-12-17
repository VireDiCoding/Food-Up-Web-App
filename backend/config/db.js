import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://CodeWithViral:viral5648@cluster0.j8rcg.mongodb.net/Food_Up_Web_App').then(()=> console.log("DB Connected"));   
}

// direct mongodb website thi connect nahi karta aa loko wbesite ma jaine laambi process karine project banavine connection string le 6
