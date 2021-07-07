import react,{Fragment} from "react";
import {OrderList,Badge,SearchBar,Button,SelectBox} from "../../reusableComponents";
import userImage from "../../img/user.jpg";
const Orders1 = ()=>{
    let orders=[
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"In-Progress"},
        {orderNo:"LP05071632",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Complete"},
        {orderNo:"LP05071633",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Pending"}
    ]
    return (
        <Fragment>
            <div className="admin-section pl0">
                <div className="admin-container md-container">
                <div className="comm-admin-sec">
                <div className="order-list-head">

                    <div className="order-list-left">
                        <h3 className="dash-subhdn">
                            Orders
                        </h3>

                        
                    </div>

                    <div className="order-list-rig">

                        <SelectBox Style="statusField" label="Status" />
                        <Button>Update Status</Button>

                        <div className="badge-tabs ">
                            <Badge style="active">All</Badge>
                            <Badge style="gry-badge">In-Progress</Badge>
                            <Badge style="badge-yellow">Pending</Badge>
                            <Badge style="badge-violet">Complete</Badge>
                            
                        </div>
                       <SearchBar placeholder="Search" sliders={true} />
        
                    </div>
                    </div>

                    {orders ?<OrderList orders={orders}  showCheckbox={true} />:(<h1>No orders...</h1>)}
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Orders1;