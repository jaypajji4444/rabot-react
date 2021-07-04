import React from "react";
import {Play} from "../IconTypeComponent"

const PlayCard =({title,type="correct",time})=>{
    let divClassname="";
    let iClassname="ph-check";
    if(type==="delay"){
        divClassname="delay";
        iClassname="ph-warning";
    }
    else if(type=="cancel"){
        divClassname="cancelled";
        iClassname="ph-x";
    }
    return(
        <div className="play-card">
            <div className={`play-status ${divClassname}`}>
                <i className={iClassname}></i>
            </div>
            <p className="play-hdn">{title}</p>
            <Play time={time}/>
            
        </div>
    )
}

export default PlayCard;