import React from "react";
import { breakDownGraphImg } from "../../img";

const Breakdown = ()=>{
    return (
        <div className="dash-box">
        <h6 className="comm-dash-title">Error Breakdown</h6>

        <div className="break-graph-box">
            <div className="break-graph">
                <img src={breakDownGraphImg} alt=""/>
            </div>

            <div className="break-cont-box">
                <div className="break-cont">
                    <p>Total Errors</p>
                    <h6>136(100%)</h6>
                </div>
                <div className="break-cont">
                    <span className="dot yel"></span>
                    <p>Item Miscount</p>
                    <h6>47(35%)</h6>
                </div>
                <div className="break-cont">
                    <span className="dot gry"></span>
                    <p>Missing Dunnage</p>
                    <h6>47(35%)</h6>
                </div>
                <div className="break-cont">
                    <span className="dot pur"></span>
                    <p>Missing Shipping Labels</p>
                    <h6>40(30%)</h6>
                </div>
            </div>

        </div>

    </div>
    );
}

export default Breakdown;