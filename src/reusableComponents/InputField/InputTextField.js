import React from 'react';


const InputTextField = ({id,name,type,label="Name",value,onChangeHandler,required=false})=>{
    return(
        <div className="form-grp">
            <input className="form-field" type={type} id={id?id:label} name={name?name:label} required={required} onChange={onChangeHandler} />
            <p className="form-label">{label}</p>
        </div>
    )
}

export default InputTextField;