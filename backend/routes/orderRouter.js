import express from "express";
import authMinddleware from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder,  } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMinddleware,placeOrder);
orderRouter.post("/verify" ,verifyOrder);
orderRouter.post("/userOrders" ,authMinddleware, userOrders );
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;