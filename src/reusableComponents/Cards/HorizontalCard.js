import React from "react";
import {Play} from "../IconTypeComponent"
import product from "../../img/product.jpg"


const HorizontalCard =({})=>{
    return(
        <div className="prod-card">
        <div className="prod-lef">
            <div className="prod-img">
                <img src={product} alt=""/>
            </div>
            <div className="prod-cont">
                <h6 className="prod-hdn">BAND-AID Sheer Strips</h6>

                <div className="prod-lis">
                    <p>01105102WWW</p>
                    <p><span></span> Qty: 2</p>
                </div>

            </div>
        </div>

        <div className="prod-rig">
            <Play time="1:25"/>
            <i className="ph-barcode bar-code"></i>
        </div>

    </div>
    )
}

export default HorizontalCard;