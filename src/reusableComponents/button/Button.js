import React from 'react';

import "./button.css"




const SubmitButton = ({classname,name,type,variant="contained",onSubmitHandler,...props})=>{
    return (
        <button className={` btn ${classname}`} onClick={onSubmitHandler} >{props.children}</button>
    )
}

export default SubmitButton;