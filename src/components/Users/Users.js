import React,{Fragment} from "react";
import {SideNavbar} from "../../reusableComponents";
import {companyImage,app3Img,app2Img,app1Img} from "../../img";
import {Download,SearchBar} from "../../reusableComponents"

const Users = ()=>{
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
                    <div className="admin-container">
                        <div className="admin-hdn-box">
                            <h5 className="admin-hdn mb0">Users</h5>
                            <div className="order-list-rig">                          
                                <SearchBar placeholder="Search" sliders={true} />
                                <Download/>
                            </div>
                        </div>
                    </div>
            </div>
            </Fragment>
        )
}

export default Users;