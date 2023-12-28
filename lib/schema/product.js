import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name:String,
    email:String
});

export const Product = mongoose.models.products || mongoose.model("products",productschema)
