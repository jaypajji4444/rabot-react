import React,{Fragment} from "react";
import {SideNavbar} from "../../reusableComponents";
import {floor,floor2} from "../../img";
import {Download,SearchBar,VerticalCard} from "../../reusableComponents"

const Warehouse = ()=>{
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
                    <div className="admin-container">
                        <div className="admin-hdn-box">
                            <h5 className="admin-hdn mb0">Warehouse</h5>
                            <div className="order-list-rig">                          
                                <SearchBar placeholder="Search" sliders={true} />
                                <Download/>
                            </div>
                        </div>

                        <div className="comm-admin-sec">
                            <div className="f-row f-3">
                                <div class="f-col"><VerticalCard title="City Warehouse" img={floor} /></div>
                                <div class="f-col"><VerticalCard title="Auckland House" img={floor2}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default Warehouse;