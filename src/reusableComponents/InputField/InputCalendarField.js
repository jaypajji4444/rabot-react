import React from 'react';


const InputCalendarField = ({style="right",id="calendar",label="Calendar",name,onChangeHandler,required=false})=>{
    let isRight=style==="right";
    let iconPositionClassName=isRight?"icon-right":"var-chart";
    return(
        <div className={`form-grp ${isRight?"":"form-grp-var"}`}>
            <input className="form-field" type="text" id={id} name={name} required={required} onChange={onChangeHandler} />
            <p className="form-label">{label}</p>
            <i className={`${iconPositionClassName} ph-calendar-blank`}></i>
        </div>
    )
}

export default InputCalendarField;