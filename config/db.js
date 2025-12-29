import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vermashutosh0605:6284160849@cluster0.os4m14r.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}