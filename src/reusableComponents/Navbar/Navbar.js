import React from "react";
import {Link} from "react-router-dom";
import logo from "../../img/logo.svg";
import profile from "../../img/profile.jpg";
const Navbar=()=>{
    return (
        <div id="header">
            <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header-rig">
                <ul className="head-list">
                    <li>
                    <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                    <div className="menuDrop notify-drop">
                        <Link to="#" className="notify active">
                        <i className="ph-bell"></i>
                        <span></span>
                        </Link>
                        
                        <div className="dropDown">
                            <ul>
                                <li>
                                <Link to="#" className="message">
                                    <h6>Quis neque</h6>
                                    <p>Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur
                                        et luctus et, porta ut dolor.
                                    </p>
                                    <span className="time">Today, 12.25pm</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="#" className="message">
                                    <h6>Quis neque</h6>
                                    <p>Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur
                                        et luctus et, porta ut dolor.
                                    </p>
                                    <span className="time">20 May'21, 12.25pm</span>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    </li>
                    <li>
                    <div className="menuDrop">
                        
                        <div className="user-profile">
                            <div className="user-img">
                                <img src={profile} alt=""/>
                            </div>
                            <p>My Account</p>
                            <i className="ph-caret-down"></i>
                        </div>
                        
                        <div className="dropDown remBor">
                            <ul>
                                <li>
                                <Link to="#"><i className="ph-user"></i> Profile</Link>
                                </li>
                                <li>
                                <Link to="#"><i className="ph-buildings"></i> Company</Link>
                                </li>
                                <li>
                                <Link to="#"><i className="ph-users"></i> Users</Link>
                                </li>
                                <li>
                                <Link to="#"><i className="ph-house-simple"></i> Warehouse</Link>
                                </li>
                                <li>
                                <Link to="#"><i className="ph-sign-out"></i> Logout</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Navbar;