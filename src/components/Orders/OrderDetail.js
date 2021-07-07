import react,{Fragment} from "react";
import {OrderIcon,ImageBasedIcon,Badge,SearchBar,HorizontalCard,PlayCard} from "../../reusableComponents";
import userImage from "../../img/user.jpg";
import johnDoeImg from "../../img/john-doe.jpg";
import orderMainImg from "../../img/order.jpg";

const OrderDetail = ()=>{
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
                        
                <div className="order-flex">
                    <div className="myorder">
                        <p className="order-hdn">My Orders</p>

                        <SearchBar placeholder="Search" required sliders={false} />

                        
                        <div className="order-id active">
                            <h6>LP05071631</h6>
                            <p>4 Items</p>
                        </div>
                        {orders && orders.map((order,index)=>(
                            <div className="order-id">
                                <h6>{order.orderNo}</h6>
                                <p>{order.item} items</p>
                            </div>
                        ))}               
                        
                        
                    </div>
                    <div className="order-flex-rig">
                        <div className="row">

                            <div className="w100">
                                <div className="order-package">
                                    <div className="order-pack-lef">  
                                        <OrderIcon title="Order" label="LP05071631" />
                                        <ImageBasedIcon title="Assigned" label="John Doe" img={johnDoeImg} />
                                        <OrderIcon title="25 Jun'21 12:56pm" label="72 Seconds" />
                                        <OrderIcon title="Station Id" label="57894" />
                                    </div>
                                    
                                    <div className="order-pack-rig">
                                        <Badge style="badge-lg gry-badge active">In-Progress</Badge> 
                                    </div>
                                </div>
                            </div>

                            <div className="w60">
                                
                                <div className="order-main-img">
                                    <img src={orderMainImg} alt=""/>
                                </div>
                                
                            </div>
                            <div className="w40">
                                <p className="comm-title">Items Playlist</p>
                                <HorizontalCard />
                                <HorizontalCard />
                                <HorizontalCard />  
                            </div>

                            <div className="w100">
                                
                                <p className="comm-title">Items Playlist</p>

                                <div className="f-row f-8">
                                    <div className="f-col">
                                        <PlayCard  title="Brown Box" time="1:20" type="correct" />
                                    </div>
                                    <div className="f-col">
                                        <PlayCard  title="Brown Box" time="1:40" type="delay" />
                                    </div>
                                    <div className="f-col">
                                        <PlayCard  title="Brown Box" time="1:50" type="cancel" />
                                    </div>
                                
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
export default OrderDetail;