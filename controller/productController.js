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
        message: "Image not prodided",
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


