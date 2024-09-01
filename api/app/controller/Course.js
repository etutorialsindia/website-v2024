import {Course} from "../model/index.js";

const CourseController={
    list:async function(inputs){
        const data=await Course.find();
        return Object.freeze({
            status:200,
            data:{
                status:"success",
                message:`${data.length} records found`,
                data
            }
        });
    },
    open:function(inputs){
        return Object.freeze({
            status:502,
            data:{
                status:"success",
                message:"Under development"
            }
        });
    },
    create:function(inputs){
        return Object.freeze({
            status:502,
            data:{
                status:"success",
                message:"Under development"
            }
        });
    },
    update:function(inputs){
        return Object.freeze({
            status:502,
            data:{
                status:"success",
                message:"Under development"
            }
        });
    },
    delete:function(inputs){
        return Object.freeze({
            status:502,
            data:{
                status:"success",
                message:"Under development"
            }
        });
    },
    find:function(inputs){
        return Object.freeze({
            status:502,
            data:{
                status:"success",
                message:"Under development"
            }
        });
    },
}
export default CourseController;