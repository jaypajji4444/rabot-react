import React from "react";
import "./OrderList.css"
import OrderListItem from "./OrderListItem";
import img_avatar from "../icons/img_avatar.png"
import{Tags} from "../index"

const OrderList =()=>{
    let orders=[
        {orderNo:"LP05071631",stationId:58945,items:4,duration:"75 Seconds",assigned:"Dannies Stewart",date:"25 Jun'21 12.56pm",status:"In-Progress"},
        {orderNo:"LP05071631",stationId:58945,items:4,duration:"75 Seconds",assigned:"Dannies Stewart",date:"25 Jun'21 12.56pm",status:"Pending"},
        {orderNo:"LP05071631",stationId:58945,items:4,duration:"75 Seconds",assigned:"Dannies Stewart",date:"25 Jun'21 12.56pm",status:"Complete"},
        
    ]


    let orderList = orders.map(order=><OrderListItem order={order} />)
    return(
    <div>
    <div className="row">
        <div className="col-lg-12 p-2 bg-white rounded shadow-sm mb-3">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" className="border-0 ">
                            <div className=" px-2 ">Order No</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Station Id</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Items</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Duration</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Assigning</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Date Time</div>
                        </th>
                        <th scope="col" className="border-0 ">
                            <div className="py-1 ">Status</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {orderList}  
                    </tbody>
                </table>
            </div>

        </div>
    </div>

    {/* <div className="row">
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
        <div className="col-sm-1">coolp</div>
    </div > */}
    <div className="outer-div">
    <ul class="list-group list-group-horizontal rounded ">
        <li className="list-group-item item_no ">LP05071631</li>
        <li className="list-group-item item">5869</li>
        <li className="list-group-item item ">4</li>
        <li className="list-group-item item ">75 Seconds</li>
        
        <li className="list-group-item item "><img src={img_avatar} alt="Avatar" className="img_avatar mr-2" />Dannies Stewart</li>
        <li className="list-group-item item">25 Jun'21 12.56pm</li>
        <li className="list-group-item item"><Tags text="Pending" classname="tag tag-bg-yellow"/></li>
    </ul>
    </div>

    <div className="outer-div ">
    <ul class="list-group list-group-horizontal rounded ">
        <li className="list-group-item item_no ">LP05071631</li>
        <li className="list-group-item item">5869</li>
        <li className="list-group-item item ">4</li>
        <li className="list-group-item item ">75 Seconds</li>
        <li className="list-group-item item "><img src={img_avatar} alt="Avatar" className="img_avatar mr-2" />Dannies Stewart</li>
        <li className="list-group-item item">25 Jun'21 12.56pm</li>
        <li className="list-group-item item"><Tags text="Pending" classname="tag tag-bg-yellow"/></li>
    </ul>
    </div>
    </div>
    
    )
}

export default OrderList;