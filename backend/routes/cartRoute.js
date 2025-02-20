import express from "express"
import { addTocart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMinddleware from "../middleware/auth.js";
const cartRouter = express.Router();


cartRouter.post("/add",authMinddleware, addTocart);
cartRouter.post("/remove",authMinddleware, removeFromCart);
cartRouter.post("/get",authMinddleware, getCart)

export default cartRouter
