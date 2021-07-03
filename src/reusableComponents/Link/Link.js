import React from 'react';
import {Link} from "react-router-dom";
import "./links.css"

const Links = ({text,to,classname})=>{
    return(
        <Link to={to} className={classname}>{text}</Link>
    )
}

export default Links;
