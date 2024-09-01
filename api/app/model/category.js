import mongoose from "mongoose";

let schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        require:true,
        unique:true
    },
    icon:{
        type:String,
        required:false
    }
},{
    timestamps:true,
    collection:"category"
});

const Category=mongoose.models.Category||mongoose.model("Category",schema);
export default Category;