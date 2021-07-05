import React from 'react';


const InputCalendarField = ({id="calendar",label="Calendar",value,onChangeHandler,required=false})=>{
    return(
        <div className="form-grp">
            <input className="form-field" type="text" id="calender" name="calender" required onChange={onChangeHandler} />
            <p className="form-label">{label}</p>
            <i className="icon-right ph-calendar-blank"></i>
        </div>
    )
}

export default InputCalendarField;