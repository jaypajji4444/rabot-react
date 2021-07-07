import React from 'react';
// style prope => fill:"active" , large:"badge-lg" , "gry-badge" , "badge-yellow" , "badge-violet"
const Tags = ({style="",...props})=>{
    return (
        <div className={`badge ${style}`}>{props.children}</div>
    )
}

export default Tags;
