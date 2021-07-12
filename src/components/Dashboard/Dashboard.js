import React from "react";
import {SelectBox,InputCalendarField,Share,Filter,Badge,SmallLineGraph,MainGraph,Breakdown,OrderList} from "../../reusableComponents"
import { lineImgUp,lineImgDown,userImg } from "../../img";


const labels = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,13,14,11,16,11,15,16,11,15,16,25],
      backgroundColor: "#1d2b4f"
    },
    {
      label: 'Dataset 2',
      data: [2,3,4,5,6,1,5,3,4,6,7,1],
      backgroundColor: "#fdc953",
    },
    
  ]
};


    
  











const Dashboard =()=>{
    let orders=[
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"In-Progress"},
        {orderNo:"LP05071632",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"Complete"},
        {orderNo:"LP05071633",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImg,dateTime:"25 Jun'21 12.56pm",status:"Pending"}
    ]
    return(
        <div className="admin-section pl0">
            <div className="admin-container dash-contr">

                <div className="admin-hdn-box">
                    <h5 className="admin-hdn mb0">Dashboard</h5>

                    <div className="order-list-rig dash-input">
                        <SelectBox label="Warehouse"/>
                        <InputCalendarField label="Calendar" name="from" style="right" />
                        <Filter />  
                        <Share/>              
                    </div>
                </div>

                <div className="comm-admin-sec">
                    <div className="f-row f-2 disFlex">
                        <div className="f-col"><SmallLineGraph title="Accuracy Rate" data="99.6%" img={lineImgDown} trendValue="1.28%" trend="down" compareDate={{start:"1 Jul'21",end:"30 Jul'21"}}/></div>
                        <div className="f-col"><SmallLineGraph title="Item Miscount" data="0.4%" img={lineImgUp} trendValue="1.28%" trend="up" compareDate={{start:"1 Jul'21",end:"30 Jul'21"}}/></div>

                       
                    </div>
                    <Breakdown />
                    <MainGraph data={data}  />
                    <div className="dash-order">
                            <h6 className="comm-dash-title mb0">Orders</h6>

                            <div className="badge-tabs">
                                <Badge style="active">
                                    All
                                </Badge>
                                <Badge style="gry-badge">
                                    In-Progress
                                </Badge>
                                <Badge style="badge-yellow">
                                    Pending
                                </Badge>
                                <Badge style="badge-violet">
                                    Complete
                                </Badge>
                            </div>
                    </div>
                    {orders ?<OrderList orders={orders}  showCheckbox={false} />:(<h1>No orders...</h1>)}


                </div>

               

            </div>
        </div>
    )
}

export default Dashboard;