import React from 'react';
import img from "../../../img/google.svg"
const GoogleButton = ({style="light",onSubmitHandler,...props})=>{
    return (
        <button className={`button butn-reg ${style=="light"?"line":""}`} onSubmit={onSubmitHandler}>
            <img className="btn-img" src={img} alt=""/>
            {props.children}
        </button>
    )
}

export default GoogleButton;