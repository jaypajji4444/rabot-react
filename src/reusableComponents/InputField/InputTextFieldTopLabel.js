import React from 'react';


const InputTextFieldTopLabel = ({id,name,label="AnyLabel",value,onChangeHandler,required=false})=>{
    return(
        <div className="form-grp sTop">
            <input className="form-field" type="text" id={id?id:label} name={name?name:label} required={required} onChange={onChangeHandler} />
            <p className="form-label">{label}</p>
        </div>
    )
}

export default InputTextFieldTopLabel;