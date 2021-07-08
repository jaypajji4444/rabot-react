import React from "react";


const WarehouseListItem = ({warehouse:{name,user,email,mobile,city,img}})=>{
    
    return(
    <div className="table-body ">
        <div className="tbl-body-txt">
            <div className="tbl-user-box">
                <div className="tbl-user">
                    <img src={img} alt=""/>
                </div>
                <p>{name}</p>
            </div>  
        </div>
        <div className="tbl-body-txt">
            <p>{user}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{email}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{mobile}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{city}</p>
        </div>
    </div>
    )
}

export default WarehouseListItem;