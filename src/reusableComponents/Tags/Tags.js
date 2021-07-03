import React from 'react';

import "./Tags.css"

const Tags = ({text,classname})=>{
    return (
        <span class={`badge badge-pill ${classname} ` }>{text}</span>
    )
}

export default Tags;
