import React,{Fragment} from "react";
import {SideNavbar} from "../../reusableComponents";
import {floor,floor2,userImg} from "../../img";
import {Download,SearchBar,VerticalCard,WarehouseList} from "../../reusableComponents"

const Warehouse = ()=>{
    let warehouses=[
        {name:"CityWarehouse" , user:"Beatrice Griffin",email:"diana.sanders@mail.com",mobile:"(671)330-6658",city:"York",img:userImg},
        {name:"AucklandHouse " , user:"Jose Richards",email:"diana.sanders@mail.com",mobile:"(671)330-6658",city:"York",img:userImg},
        {name:"Melbourne House" , user:"Beatrice Griffin",email:"diana.sanders@mail.com",mobile:"(671)330-6658",city:"York",img:userImg},
       
    ]
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
                            <WarehouseList warehouses={warehouses}/>
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