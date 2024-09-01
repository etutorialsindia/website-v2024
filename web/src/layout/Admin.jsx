import React from "react";
import { Input, Button } from "../components/form";
import {Outlet} from "react-router-dom";
import "../styles/admin.scss"
export default function Admin() {
    const [endpoint, setEndpoint] = React.useState("/api/v1/");
    const [method, setMethod] = React.useState("get")
    return (
        <div className="container admin">
            <div className="toast"></div>
            <div className="endpoint">
                <Input name="endpoint" label="Endpoint" value={ endpoint } onChange={ e => setEndpoint(e.target.value) } />
                <div className="methods">
                    <Button pclass={ (method === "get") ? "active" : "" } onClick={ e => { setMethod("get") } } label="All" />
                    <Button pclass={ (method === "post") ? "active" : "" } onClick={ e => { setMethod("post") } } label="Search" />
                    <Button pclass={ (method === "put") ? "active" : "" } onClick={ e => { setMethod("put") } } label="New" />
                </div>
            </div>
            <Outlet context={{endpoint,setEndpoint,method,setMethod}}/>
        </div>
    )
}