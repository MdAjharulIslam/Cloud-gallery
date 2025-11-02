import express from "express";
import { addProduct, getAllProduct, getProductById } from "../controller/productController.js";
import upload from '../middleware/multer.js'
const productRoute = express.Router();

productRoute.post('/add',upload.single("image"),addProduct)
productRoute.get('/products',getAllProduct)
productRoute.post('/:id',getProductById)
export default productRoute