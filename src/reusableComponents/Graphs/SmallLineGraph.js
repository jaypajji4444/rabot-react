import React from "react";
import {SelectBox} from "../index";

const SmallLineGraph=({title,data,img})=>{
    return(
        <div className="dash-box">
        <div className="comm-dash-hdn">
            <div className="comm-dash">
                <p>{title}</p>
                <h6>{data}</h6>
            </div>
            
                <SelectBox label="Year" Style="graph-form"/>
            
        </div>

        <img className="line-chart" src={img} alt=""/>

    </div>
    )
}

export default SmallLineGraph;
