import mongoose from 'mongoose';

const connectDB = async(req, res)=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
        return res.json({
            success:false,
            message:"internal mongoose error"
        })
    }
}

export default connectDB