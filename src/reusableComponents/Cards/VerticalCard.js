import React from "react";
import floor from "../../img/floor.jpg"



const VerticalCard =({})=>{
    return(
     
<div className="comm-card">
        <div className="card-img">
            <img src={floor} alt=""/>
        </div>
        <div className="card-btm">
            <div className="card-txt">
                <h6 className="card-hdn">City Warehouse</h6>
                <ul className="card-desc">
                    <li>
                        <p>Beatrice Griffin</p>
                    </li>
                    <li><a href="#">diana.sanders@mail.com</a></li>
                    <li><a href="#">(671)330-6658</a></li>
                </ul>
            </div>
            <p className="place">York</p>
        </div>

    </div>
    )
}

export default VerticalCard;

