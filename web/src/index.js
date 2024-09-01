import React from "react"
import ReactDom from "react-dom"

let rootElement=document.querySelector("#root");
if(!rootElement){
    rootElement=document.createElement("root");
    rootElement.id="root"
    document.body.appendChild(rootElement);
}
const root=ReactDom.createRoot(rootElement);
root.render(<>It works</>);