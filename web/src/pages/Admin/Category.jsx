import React from "react";
import {Form,Button,Input} from "../../components/form";
import "../../styles/admin.scss"
import { API } from "../../modules";
export default function Category(){
    const [toast,setToast]=React.useState("");
    const [info,setInfo]=React.useState({
        url:"",
        name:"",
        icon:""
    })
    const [endpoint,setEndpoint]=React.useState("/api/v1/category")
    const [method,setMethod]=React.useState("get");
    const [searchParams,setSearchParams]=React.useState({});
    const [categories,setCategories]=React.useState([]);
    function refreshData(){
        if(method!=="get"){
            return;
        }
        let api=new API(endpoint);
        api.get("").then(resp=>{
            if(resp.status==="success"){
                setCategories(resp.data);
            }
        })
    }
    React.useEffect(refreshData,[method,endpoint])
    async function onAdd(e){
        const api=new API(endpoint);
        let response=await api.put("",info)
        setToast(`${response.status}: ${response.message??""}`);
        setTimeout(()=>{
            setToast("");
        },5000);
        if(response.status==="success"){
            setTimeout(()=>{
                setMethod("get");
            },6000)
        }
    }
    function onSearch(e){
        const api=new API(endpoint);
        let params={}
        if(searchParams.url !== "" )params.url=searchParams.url;
        if(searchParams.name !== "" )params.name=searchParams.name;
        api.post("",params).then(resp=>{
            if(resp.status==="success"){
                setCategories(resp.data)
            }
        })
        
    }
    async function onUpdate(e){
        const api=new API(endpoint);
        let response=await api.patch("",info)
        setToast(`${response.status}: ${response.message??""}`);
        setTimeout(()=>{
            setToast("");
        },5000);
        if(response.status==="success"){
            setTimeout(()=>{
                setMethod("get");
            },6000)
        }
    }
    function focusFirstField(){
        const frm=document.querySelector("form");
        if(!frm)return;
        const firstInput=frm.querySelector("[name]");
        if(!firstInput)return;
        firstInput.focus();
    }
    return(<>
        <div className="container admin">
            <div className="toast">{toast}</div>
            <div className="endpoint">
                <Input name="endpoint" label="Endpoint" value={endpoint} onChange={e=>setEndpoint(e.target.value)} />
                <div className="methods">
                <Button pclass={(method==="get")?"active":""} onClick={e=>{setMethod("get")}} label="All" />
                <Button pclass={(method==="post")?"active":""} onClick={e=>{setMethod("post")}} label="Search" />
                <Button pclass={(method==="put")?"active":""} onClick={e=>{setMethod("put")}} label="New" />
                </div>
            </div>
            <div className="form-container">
                {(method==="post") && <Form action={endpoint} method="post" title="Search">
                    <Input value={searchParams.url??""} onChange={e=>{setSearchParams({...searchParams,"url":e.target.value})}} name="url" label="URL" />
                    <Input value={searchParams.name??""} name="name" label="Name" onChange={e=>{setSearchParams({...searchParams,"name":e.target.value})}} />
                    <Button onClick={onSearch} label="Search"/>
                </Form>}
                {(["put","patch"].indexOf(method)>-1) && <Form method={method} action={endpoint} title={(method==="put")?"New Category":"Updating "+info.name}>
                    <Input onChange={e=>{
                        setInfo({...info,"name":e.target.value,"url":e.target.value.replace(/\W/g,"-").toLowerCase()})
                    }} value={info.name} name="name" label="Name" />
                    <Input onChange={e=>{
                        setInfo({...info,"url":e.target.value})
                    }} value={info.url} name="url" label="URL" />
                    <Input onChange={e=>{
                        setInfo({...info,"icon":e.target.value})
                    }} value={info.icon} name="icon" label="Icon Path"/>
                    <Button onClick={(method==="put")?onAdd:onUpdate} label={(method==="put")?"Add":"Update"}/>
                </Form>}
            </div>
            <div className="data-container">
                <table width="100%" cellspacing="0" border="1" >
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th>Icon Path</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category,index)=>(
                            <tr key={category._id}>
                            <td>{(index + 1)}</td>
                            <td>{category.name}</td>
                            <td>{category.url}</td>
                            <td>{category.icon}</td>
                            <td><Button label="delete" onClick={async e=>{
                                const api=new API(endpoint);
                                await api.delete("",category);
                                refreshData();                                
                            }} /></td>
                            <td><Button label="edit" onClick={e=>{
                                setInfo(category);
                                setMethod("patch");
                                focusFirstField();
                            }} /></td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}