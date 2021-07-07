import React from "react";
import userImg from "../../img/user.jpg";

const ImageBasedIcon =({title="Icon",label,img=userImg})=>{
    return(
        <div className="order">
            <div className="order-img">
                <img src={img} alt=""/>
            </div>
            <div className="order-text">
                <p>{title}</p>
                <h6>{label}</h6>
            </div>
        </div>
    )
}

export default ImageBasedIcon;