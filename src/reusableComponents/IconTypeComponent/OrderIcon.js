import React from "react";

const OrderIcon =({title="Order",id})=>{
    return(
        <div className="order">
            <div className="order-icon">
                <i className="ph-package"></i>
            </div>
            <div className="order-text">
                <p>{title}</p>
                <h6>{id}</h6>
            </div>
        </div>
    )
}

export default OrderIcon;