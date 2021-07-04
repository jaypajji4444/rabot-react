import React from 'react';
import {Link} from "react-router-dom";

const Links = ({to,...props})=>{
    return(
        <Link to={to} className={`comm-link`}>{props.children}</Link>
    )
}

export default Links;
