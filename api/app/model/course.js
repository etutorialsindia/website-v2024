import mongoose from "mongoose"

let schema=new mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        thumbnail:{
            type:String
        },
        banner:{
            type:String,
        }
    },
    duration:{
        type:Number,
        min:1
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    prerequisite:[],
    mode:{
        type:String
    },
    summary:{
        type:String
    },
    toc:{
        type:String
    }
},{
    timestamps:true,
    collection:"course"
});
const Course=mongoose.model("Course",schema);
export default Course;