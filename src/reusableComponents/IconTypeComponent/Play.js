import React from "react";

const Play =({time})=>{
    return(
        <div className="duration">
            <i className="ph-play"></i>
            {time}
        </div>
    )
}

export default Play;