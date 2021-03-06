import React from "react";
import floor from "../../img/floor.jpg";
import {Link} from "react-router-dom";



const VerticalCard =({title="Card",img=floor})=>{
    return(
     
<div className="comm-card">
        <div className="card-img">
            <img src={img} alt=""/>
        </div>
        <div className="card-btm">
            <div className="card-txt">
                <h6 className="card-hdn">{title}</h6>
                <ul className="card-desc">
                    <li>
                        <p>Beatrice Griffin</p>
                    </li>
                    <li><Link to="#">diana.sanders@mail.com</Link></li>
                    <li><Link to="#">(671)330-6658</Link></li>
                </ul>
            </div>
            <p className="place">York</p>
        </div>

    </div>
    )
}

export default VerticalCard;

