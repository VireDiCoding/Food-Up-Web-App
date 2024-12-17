import foodModle from "../models/foodModel.js";
import fs from 'fs';



// add food item

const addFood = async(req,res) =>{
    
   let img_filename = `${req.file.filename}`
    
    const food = new foodModle({
        name: req.body.name,
        description: req.body.description, 
        price: req.body.price,
        image: img_filename,
        category: req.body.category
    })
    try{
        await food.save();
        res.json({success:true, message: "Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// all food list
const listfood = async(req,res) =>{
     try{
        const foods = await foodModle.find({});
        res.json({success:true,data:foods})
     }
     catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
        
     }
}

// remove food item
const removeFood = async(req,res)=>{
    try { 
        const food = await foodModle.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
            
        await foodModle.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listfood,removeFood}