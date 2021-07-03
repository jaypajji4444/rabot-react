import React from 'react';
import "./googleButton.css"
import googleIcon from "../icons/google_3.svg"
const GoogleButton = ({label,onSubmitHandler,classname,...props})=>{
    return (
        <button className={`btn ${classname}`} onClick={onSubmitHandler}><img  alt="img" src={googleIcon} className="mr-2"/>{label}</button>
    )
}

export default GoogleButton;