import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:false},
    price: {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true}
})

const foodModle = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModle;

