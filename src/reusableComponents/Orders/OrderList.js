import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({orders})=>{
    return(
        <div className="main-table">
            <div className="table-head">
                <div className="tbl-head-txt">
                    <p>Order No.</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Station ID</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Items</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Duration</p>
                </div>
                <div className="tbl-head-txt assign">
                    <p>Assigned</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Date Time</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Status</p>
                </div>
            </div>
            {orders && orders.map((order,index)=><OrderListItem key={index} order={order}/>)}

        </div>
    )
}

export default OrderList;