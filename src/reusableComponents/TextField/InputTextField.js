import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./inputTextfield.css"

const InputTextField = ({id,name,type,label,value,onChangeHandler,fullWidth=true,required=false})=>{
    return(
        
        <input type={type} name={name} id={id} placeholder={label} className={`form-control`} required={required} onChange={onChangeHandler} />
    )
}

export default InputTextField;