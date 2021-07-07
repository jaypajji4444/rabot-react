import React from "react";
import {CheckBoxType2,Badge} from "../index";

const OrderListItem = ({showCheckbox,order:{orderNo,stationId,item,duration,assigned,img,dateTime,status}})=>{
    console.log(showCheckbox)
    let badgeClass ="gry-badge";
    if(status.toLowerCase()==="complete")badgeClass="badge-violet";
    else if(status.toLowerCase()==="pending")badgeClass="badge-yellow";
    return(
        <div className="table-body mt-3">
        <div className="tbl-body-txt">
            {!showCheckbox?<p><b>{orderNo}</b></p>:
            (
                <div className="order-list-check">
                <div className="checkbox-box chk-rd onlyck">
                    <input type="checkbox" id="checkbox3" name="checkbox" required />
                    <label className="chk-label" for="checkbox3">
                        <p><b>LP05071631</b></p>
                    </label>
                </div>
            </div>
            )
            }
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