import React,{Fragment} from "react";
import {SideNavbar} from "../../reusableComponents";
import {companyImage,app3Img,app2Img,app1Img, userImg} from "../../img";
import {Download,SearchBar,UserList} from "../../reusableComponents"

const Users = ()=>{
        const users=[
            {name:"Dennis Stewart",email:"diana.sanders@mail.com",mobile:"(671)330-6658",warehouse:"York",role:"Primary",img:userImg},
            {name:"Dennis Stewart",email:"diana.sanders@mail.com",mobile:"(671)330-6658",warehouse:"York",role:"Admin",img:userImg},
            {name:"Dennis Stewart",email:"diana.sanders@mail.com",mobile:"(671)330-6658",warehouse:"York",role:"Technical",img:userImg}
        ]
        return(
            <Fragment>
                <SideNavbar/>
                <div className="admin-section">
                    <div className="admin-container">
                        <div className="admin-hdn-box">
                            <h5 className="admin-hdn mb0">Users</h5>
                            <div className="order-list-rig">                          
                                <SearchBar placeholder="Search" sliders={true} />
                                <Download/>
                            </div>
                        </div>

                        <div className="comm-admin-sec">
                            <UserList users={users}/>
                        </div>
                    </div>
            </div>
            </Fragment>
        )
}

export default Users;