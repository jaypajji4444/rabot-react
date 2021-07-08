import React from "react";
import {Badge} from "../index";

const UserListItem = ({user:{name,email,mobile,warehouse,role,img}})=>{
    
    let badgeClass ="gry-badge";
    if(role.toLowerCase()==="technical")badgeClass="badge-violet";
    else if(role.toLowerCase()==="admin")badgeClass="badge-yellow";
    return(
    <div className="table-body mt-3">
        <div className="tbl-body-txt">
            <div className="tbl-user-box">
                <div className="tbl-user">
                    <img src={img} alt=""/>
                </div>
                <p>{name}</p>
            </div>  
        </div>
        <div className="tbl-body-txt">
            <p>{email}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{mobile}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{warehouse}</p>
        </div>
        <div className="tbl-body-txt">
            <Badge style={`active ${badgeClass}`}>{role}</Badge>
        </div>
    </div>
    )
}

export default UserListItem;