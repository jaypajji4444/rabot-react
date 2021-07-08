import React from "react";
import UserListItem from "./UserListItem";

const UserList = ({users})=>{
    return(
        <div className="main-table table-5">
            <div className="table-head ">
                <div className="tbl-head-txt">
                    <p>Name</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Email</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Mobile</p>
                </div>
                <div className="tbl-head-txt">
                    <p>Warehouse</p>
                </div>
                <div className="tbl-head-txt assign">
                    <p>Role</p>
                </div>
            
            </div>
            {users && users.map((user,index)=><UserListItem key={index} user={user} />)}

        </div>
    )
}

export default UserList;