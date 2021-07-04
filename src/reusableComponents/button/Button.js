import React from 'react';
// Avaliable style : white-fill violet-light line (line button--block)
const Button = ({style="",onSubmitHandler,...props})=>{
    return (
        <button className={`button ${style}`} onSubmit={onSubmitHandler}>{props.children}</button>
        
    )
}

export default Button;