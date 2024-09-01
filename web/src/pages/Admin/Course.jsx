import React from "react";
import {useOutletContext } from "react-router-dom";

export default function Course(){
    const config=useOutletContext()
    React.useEffect(()=>{
        config.setEndpoint("/api/v1/course")
        config.setMethod("get")
    },[])
    return(<>Course</>)
}