import React,{useState} from "react";
import {Link} from "react-router-dom";

const SideNavbar = (props)=>{
    const [activeLink,setActiveLink] = useState("");
    const handleLinkClick=(id)=>{
        setActiveLink(id)
        console.log("active"+activeLink,id)
        
    }
    return (
        <div className="sidebar">

        <div className="acc-box">
            <h6 className="sidebar-hdn">My account</h6>
            <ul className="parHid">
                <li className="active">
                    <Link  to="/profile" ><i className="ph-user" ></i>
                        <p>Profile</p>
                    </Link>
                </li>
                <li >
                    <Link to="/company" ><i className="ph-buildings"></i>
                        <p>Company</p>
                    </Link>
                </li>
                <li>
                    <Link to="/users"><i className="ph-users"></i>
                        <p>Users</p>
                    </Link>
                </li>
                <li>
                    <Link to="/warehouse"><i className="ph-house-simple"></i>
                        <p>Warehouse</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default SideNavbar;