import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import {SideNavbar} from "../../reusableComponents";
import {companyImage,app3Img,app2Img,app1Img} from "../../img";
import {InputTextField,Button,SelectBox} from "../../reusableComponents"

const Company = ()=>{
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
                    <div className="admin-container">
                        <h5 className="admin-hdn">Company</h5>
                        <div className="comm-admin-sec">
                            <div className="row">
                                <div className="w50">                                  
                                    <div className="comm-box">
                                        <div className="admin-form">                                           
                                            <h6 className="comm-hdn">BASIC DETAILs</h6>
                                            <div className="profile-img rem-radius">
                                                <img src={companyImage} alt=""/>
                                            </div>
                                            <div className="f-row f-2">
                                                <div className="f-col">
                                                    <InputTextField type="text" label="Organization Name"  id="first-name" name="first-name"/> 
                                                </div>
                                                <div className="f-col">
                                                    <SelectBox label="Organization Type" />
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

                                <div className="w50">
                                    <div className="comm-box">
                                        <h6 className="comm-hdn">Integrations</h6>
                                        <div className="intergate">
                                            <div className="app-box">
                                                <div className="app-img">
                                                    <img src={app1Img} alt=""/>
                                                </div>
                                                <i className="ph-check-circle-fill intergated"></i>
                                            </div>
                                            <div className="app-box">
                                                <div className="app-img">
                                                    <img src={app2Img} alt=""/>
                                                </div>
                                                <Link to="#" className="comm-link">Integrate</Link>
                                            </div>
                                            <div className="app-box">
                                                <div className="app-img">
                                                    <img src={app3Img} alt=""/>
                                                </div>
                                                <Link to="#" className="comm-link">Integrate</Link>
                                            </div>
                                        </div>
                                    </div>                      
                                </div>


                            </div>
                        </div>
                    </div>
            </div>
            </Fragment>
        )
}

export default Company;