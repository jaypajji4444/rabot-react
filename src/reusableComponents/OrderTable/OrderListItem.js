import React from "react";
import "./OrderList.css"
import img_avatar from "../icons/img_avatar.png"
const OrderListItem = ({order})=>{
    
    return(
        <tr scope="row" className="tr_body">
            <td className="td_data_no" >{order.orderNo}</td>
            <td className="td_data">{order.stationId}</td>
            <td className="td_data">{order.items}</td>
            <td className="td_data">{order.duration}</td>
            <td className="td_data"><img src={img_avatar} alt="Avatar" className="img_avatar mr-2" />{order.assigned}</td>
            <td className="td_data">{order.date}</td>
            <td className="td_data"><span class={`badge badge-pill status ${order.status}` }>{order.status}</span></td>
        </tr>
    )
}

export default OrderListItem;