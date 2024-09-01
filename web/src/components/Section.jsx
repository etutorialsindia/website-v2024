import React from "react";

export default function Section(attr){
    return(<section className={attr.className}>
        <h2>{attr.title}</h2>
        {attr.children}
    </section>)
}