import React from "react";
import {LineChart} from "./Charts";
const SmallLineGraph=({title,data,img,trend="up",trendValue,compareDate:{start="d1",end="d2"}})=>{

        let trendDown={color:"red",icon:"ph-trend-down"};
        let trendUp={color:"green",icon:"ph-trend-up"};
        const isTrendUp=trend==="up"
        let colorClass = isTrendUp?trendUp.color:trendDown.color;
        let iconClass = isTrendUp?trendUp.icon:trendDown.icon;




    return(
        <div className="dash-box">
        <div className="comm-dash-hdn mb0">
            <div className="comm-dash">
                <p>{title}</p>
                <h6 className={colorClass}>{data}<span><i className={iconClass}></i> {trendValue}</span></h6>
                <h4>Comparing: {start} - {end}</h4>
            </div>
            <div className="line-char">
                <LineChart color={isTrendUp?"#00f100":"#f00"}/>
                
            </div>
            
            
        </div>

       

    </div>
    )
}

export default SmallLineGraph;
