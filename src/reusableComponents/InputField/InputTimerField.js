import React from 'react';


const InputTimerField = ({label="Select Timer",value,onChangeHandler,required=false})=>{
    return(
        <div className="form-grp form-grp-var">
            <input type="text" className="form-field" name="time1" required={required} onChangeHandler={onChangeHandler}  />
            <p className="form-label">{label}</p>
            <i className="var-chart ph-calendar-blank"></i>
        </div>
    )
}

export default InputTimerField;