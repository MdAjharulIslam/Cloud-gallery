import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import imagekit from "./config/imagekit.js";
dotenv.config();
const app = express();

const PORT = 4000;
await connectDB()

app.use(express.json());

app.get('/',(req, res)=>{
    res.json("app running")
})
app.use('/api/product',productRoute)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})