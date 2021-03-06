import React from "react";

const OrderIcon =({title="Order",label})=>{
    return(
        <div className="order">
            <div className="order-icon">
                <i className="ph-package"></i>
            </div>
            <div className="order-text">
                <p>{title}</p>
                <h6>{label}</h6>
            </div>
        </div>
    )
}

export default OrderIcon;