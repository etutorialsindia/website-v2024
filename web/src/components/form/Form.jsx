import React from "react";

export default function Form(attr){
    return(<form method={attr.method||"post"} action={attr.action}>
        <div className="title">{attr.title||""}</div>
        {attr.children}
    </form>)
}