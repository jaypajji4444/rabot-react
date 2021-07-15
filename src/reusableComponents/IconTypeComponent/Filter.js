import React from "react";

const Filter =({onClickHandler})=>{
    return(
        <div className="filter" onClick={()=>onClickHandler()}>
            <p>Filter</p>
            <span>74</span>
            <i className="ph-sliders"></i>
        </div>
    )
}

export default Filter;