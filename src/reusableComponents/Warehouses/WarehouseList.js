import React from "react";
import { userImg } from "../../img";
import WarehouseListItem from "./WarehouseListItem";

const WarehouseList = ({warehouses})=>{
    return(
        <div className="main-table table-5">
            <div className="table-head">
                <div className="tbl-head-txt">
                    <p>Name</p>
                </div>
                <div className="tbl-head-txt">
                    <p>User</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Email</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Mobile</p>
                </div>
                
                <div className="tbl-head-txt assign">
                    <p>City</p>
                </div>
            
            </div>
    
            {warehouses && warehouses.map((warehouse,index)=><WarehouseListItem key={index} warehouse={warehouse} />)}

        </div>
    )
}

export default WarehouseList;