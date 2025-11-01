import express from "express";
import { addProduct } from "../controller/productController.js";
import upload from '../middleware/multer.js'
const productRoute = express.Router();

productRoute.post('/add',upload.single("image"),addProduct)
export default productRoute