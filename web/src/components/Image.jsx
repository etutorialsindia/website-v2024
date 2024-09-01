import React from "react";

export default function Image(attr){
    // console.log(attr)
    let temp=attr.src.split("/");
    let img=temp.pop();
    img=img.split(".");
    img.pop();
    temp.push(img.join("."));
    // let imgsrc=temp.join("/");    
    if(!!attr.className)return (<picture>
        {/* <source srcset={imgsrc+".webp"} type="image/webp" />
        <source srcset={imgsrc+".jpg"} type="image/jpeg" />
        <source srcset={imgsrc+".png"} type="image/png" /> */}
        <img src={attr.src} alt={attr.alt} className={attr.className} loading="lazy" />
</picture>)
    return(<picture>
            {/* <source srcset={imgsrc+".webp"} type="image/webp" />
            <source srcset={imgsrc+".jpg"} type="image/jpeg" />
            <source srcset={imgsrc+".png"} type="image/png" /> */}
            <img src={attr.src} alt={attr.alt} />
    </picture>)
}