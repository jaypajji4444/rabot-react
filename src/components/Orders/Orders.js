import react,{Fragment} from "react";
import {OrderList,Badge,Download,SearchBar,Button} from "../../reusableComponents";
import userImage from "../../img/user.jpg";
const Orders = ()=>{
    let orders=[
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"In-Progress"},
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Complete"},
        {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Pending"}
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
                        <Button style="line">Bulk Update</Button>
                        
                    </div>

                    <div className="order-list-rig">
                       
                        <div className="badge-tabs ml0">
                            <Badge style="active">All</Badge>
                            <Badge style="gry-badge">In-Progress</Badge>
                            <Badge style="badge-yellow">Pending</Badge>
                            <Badge style="badge-violet">Complete</Badge>
                            
                        </div>
                       <SearchBar sliders={true} />
                       <Download />
                        
                    </div>
                    </div>

                    {orders ?<OrderList orders={orders}  showCheckbox={false} />:(<h1>No orders...</h1>)}
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Orders;