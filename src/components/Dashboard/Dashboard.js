import React from "react";
import {SelectBox,InputCalendarField,SearchBar,SmallLineGraph,MainGraph,OrderList} from "../../reusableComponents"
import { lineImg4,lineImg3,lineImg2,lineImg1,userImg } from "../../img";




const Dashboard =()=>{
    let orders=[
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"In-Progress"},
        {orderNo:"LP05071632",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"Complete"},
        {orderNo:"LP05071633",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"Pending"}
    ]
    return(
        <div class="admin-section pl0">
            <div class="admin-container dash-contr">

                <div class="admin-hdn-box">
                    <div class="order-list-left">
                        <h5 class="admin-hdn mb0">Dashboard</h5>
                        <SelectBox label="Warehouse"/>
                
                        <div class="fromto">
                            <InputCalendarField label="From" name="from" style="left" />
                            <InputCalendarField label="To" name="to" style="left" />
                        </div>
                    </div>

                    <div class="order-list-rig">
                        <SearchBar placeholder="Search" sliders={true}/>                
                    </div>
                </div>

                <div class="comm-admin-sec">
                    <div class="f-row f-4 disFlex">
                        <div class="f-col"><SmallLineGraph title="Accuracy Rate" data="99.6%" img={lineImg1}/></div>
                        <div class="f-col"><SmallLineGraph title="Item Miscount" data="99.6%" img={lineImg2}/></div>
                        <div class="f-col"><SmallLineGraph title="Missing Dunnage" data="99.6%" img={lineImg3}/></div>
                        <div class="f-col"><SmallLineGraph title="Missing Shipping Labels" data="99.6%" img={lineImg4}/></div>
                    </div>
                    <MainGraph/>
                    {orders ?<OrderList orders={orders}  showCheckbox={false} />:(<h1>No orders...</h1>)}
                </div>


            </div>
        </div>
    )
}

export default Dashboard;