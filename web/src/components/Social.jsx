import React from "react";

const data=[
    {
        name:"Facebook",
        target:"https://facebook.com/etutorials01",
        icon:"fa-brands fa-facebook"
    },
    {
        name:"Youtube",
        target:"https://www.youtube.com/@etutorials3389",
        icon:"fa-brands fa-youtube"
    },
    {
        name:"Whatsapp",
        target:"https://wa.me/919311150364",
        icon:"fa-brands fa-whatsapp"
    }
];
function Link(social){
    return (<li>
        <a target="_blank" rel="noreferrer" href={social.target} title={social.name}><i className={social.icon}></i></a>
    </li>);
}
export default function Social(){
    
    return(<ul className="social-links">
        {data.map((social)=>{
            return <Link key={`social-${social.name}`} {...social}/>;
        })}
    </ul>)
}