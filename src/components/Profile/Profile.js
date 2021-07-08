import React,{Fragment} from "react";
import {SideNavbar} from "../../reusableComponents";
import profileImage from "../../img/profile-img.jpg";
import {InputTextField,Button} from "../../reusableComponents"

const Profile = ()=>{
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
        <div className="admin-container">
            

            <h5 className="admin-hdn">Profile</h5>

            
            <div className="comm-admin-sec">

                <div className="row">
                    <div className="w50">
                        
                        <div className="comm-box">

                            <div className="admin-form">
                                
                                <h6 className="comm-hdn">BASIC DETAILs</h6>
                                <div className="profile-img">
                                    <img src={profileImage} alt=""/>
                                </div>
                                <div className="f-row f-2">
                                    <div className="f-col">
                                        <InputTextField type="text" label="First Name"  id="first-name" name="first-name"/> 
                                    </div>
                                    <div className="f-col">
                                        <InputTextField type="text" label="Last Name" id="last-name" name="last-name" /> 
                                    </div>
                                </div>
                               
                            </div>

                            <div className="admin-form">
                                <h6 className="comm-hdn">contact details</h6>

                                <div className="row">
                                    <div className="w100">
                                        <InputTextField type="email" label="Email" id="email" name="email" /> 
                                    </div>
                                    <div className="w50">
                                        
                                    <InputTextField type="text" label="Phone"  id="phone" name="phone" /> 
                                       
                                    </div>
                                    <div className="w50">
                                    <InputTextField type="text" label="Mobile"  id="mobile" name="mobile" /> 
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                       
                       <Button>Update</Button>

                    </div>
                </div>

            </div>
           

        </div>

    </div>
            </Fragment>
        )
}

export default Profile;