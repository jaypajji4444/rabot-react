import React,{Fragment} from "react";
import {SearchBar, SideNavbar} from "../../reusableComponents";
import {floor} from "../../img";
import {InputTextField,Button,SelectBox,CheckBoxType2} from "../../reusableComponents"

const AddEditWarehouse = ()=>{
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
        <div className="admin-container">
            

        <div className="admin-hdn-box">
                <h5 className="admin-hdn mb0">Add/Edit Warehouse</h5>

                <div className="order-list-rig">
                  
                    <Button>Update</Button>
                   
                </div>
            </div>

            
            <div className="comm-admin-sec">

                <div className="row">
                    <div className="w50">
                        
                        <div className="comm-box">

                            <div className="admin-form">
                                
                                <h6 className="comm-hdn">BASIC DETAILs</h6>
                                <div className="floor-img">
                                    <img src={floor} alt=""/>
                                </div>
                                <div className="f-row f-2">
                                    <div className="f-col">
                                        <InputTextField type="text" label="Warehouse Name"  id="warehouse-name" name="warehouse-name"/> 
                                    </div>
                                    <div className="f-col">
                                        <InputTextField type="text" label="City" id="city" name="city" /> 
                                    </div>
                                   
                                </div>
                               
                            </div>

                            <div className="admin-form">
                                <h6 className="comm-hdn">Primary contact details</h6>

                                <div className="row">
                                <div className="w100">
                                <InputTextField type="text" label="Select Contract" id="select-contract" name="select-contract" /> 
                                </div>
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
                       
                    </div>

                    <div className="w50">
                            <div className="comm-box">
                            <h6 className="comm-hdn">Warehouse</h6>
            
                            <SearchBar placeholder="Search" sliders={false}/>

                            <div className="ware-list">
                                <CheckBoxType2 label="Stockholm" id="stockholm" value="stockholm" style="rev-check"/>
                                <CheckBoxType2 label="Bucharest" id="bucharest" value="bucharest" style="rev-check"/>
                                <CheckBoxType2 label="Barcelona" id="barcelona" value="barcelona" style="rev-check"/>
                                <CheckBoxType2 label="Florence" id="florence" value="florence" style="rev-check"/>
                                <CheckBoxType2 label="Istanbul" id="istanbul" value="istanbul" style="rev-check"/>         
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

export default AddEditWarehouse;