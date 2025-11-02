import fs from "fs";
import imagekit from "../config/imagekit.js";
import Product from "../model/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const imageFile = req.file;
    if (!imageFile) {
      return res.json({
        success: false,
        message: "Image not provided",
      });
    }

    const imageBuffer = fs.readFileSync(imageFile.path);

    const image = await imagekit.upload({
      file: imageBuffer,
      fileName: imageFile.originalname,
      folder: "product",
    });

    const uploadProduct = await Product.create({
      name,
      image: image.url,
    });

    return res.json({
      success: true,
      message: "product add successfully",
      uploadProduct,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "internal server error",
    });
  }
};


export const getAllProduct = async(req, res)=>{
  try {
    const allProduct = await Product.find();
    if(!allProduct || allProduct.length===0){
      return res.json({
        success:false,
        message:"Not any product available"
      })
    }
    
    return res.json({
      success:true,
      allProduct
    })
  } catch (error) {
    return res.json({
      success:false,
      message:"Internal server error"
    })
  }
}