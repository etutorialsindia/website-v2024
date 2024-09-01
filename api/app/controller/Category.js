import { Category } from "../model/index.js";

const CategoryController={
    list:async function (inputs){
        const data=await Category.find();
        return Object.freeze({
            status:200,
            data:{
                status:"success",
                message:`${data.length} items found`,
                data
            }
        })
    },
    open:async function (inputs){
        
    },
    create:async function (inputs){
        
    },
    update:async function (inputs){
        
    },
    delete:async function (inputs){
        
    },
}
export default CategoryController;