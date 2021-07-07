import React from "react";
import {Badge} from "../Badge"

const OrderListItem = ({order:{orderNo,stationId,item,duration,assigned,img,dateTime,status}})=>{
    let badgeClass ="gry-badge";
    if(status.toLowerCase()==="complete")badgeClass="badge-violet";
    else if(status.toLowerCase()==="pending")badgeClass="badge-yellow";
    return(
        <div className="table-body mt-3">
        <div className="tbl-body-txt">
            <p><b>{orderNo}</b></p>
        </div>
        <div className="tbl-body-txt">
            <p>{stationId}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{item}</p>
        </div>
        <div className="tbl-body-txt">
            <p>{duration}</p>
        </div>
        <div className="tbl-body-txt assign">
            
            <div className="tbl-user-box">
                <div className="tbl-user">
                    <img src={img} alt=""/>
                </div>
                <p>{assigned}</p>
            </div>
            
        </div>
        <div className="tbl-body-txt">
            <p>{dateTime}</p>
        </div>
        <div className="tbl-body-txt">
            <Badge style={`active ${badgeClass}`}>{status}</Badge>
        </div>
    </div>
    )
}

export default OrderListItem;