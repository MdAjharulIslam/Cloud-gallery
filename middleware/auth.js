import express from 'express'
import jwt from "jsonwebtoken"
const auth = async (req, res, next)=>{
    try {
        const token = req.headers.authorization;

            const decode = await jwt.verify(token, process.env.JWT_SECTET);
            if(!decode){
                return res.json({
                    success:false,
                    message:"invalid token"
                })
            } 
            req.auth = decode;
            next();       
    } catch (error) {
        return res.json({
            success:false,
            message:"internal server error"
        })
    }
}