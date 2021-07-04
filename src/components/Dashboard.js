import React,{Fragment} from 'react';
import userImage from "../img/user.jpg";

import "./DashBoard.css"

import {SelectBox,Button,GoogleButton,Link,SearchBar,
CheckBoxType1,CheckBoxType2,CheckBoxType3,CheckBoxType4Correct,CheckBoxType4Wrong,CheckBoxType5,Radio,
InputCalendarField,InputPasswordField,InputTextAreaField,InputTextField,InputTimerField,InputVarianceField,InputTextFieldTopLabel
,Badge,Share,Download,Filter,H2,H3,Navbar,
PlayCard,Play,OrderIcon,HorizontalCard,VerticalCard,OrderList
} from "../reusableComponents/index"

let selectBoxData = ["Option-1","Option-2","Option-3"]
let orders=[
    {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"In-Progress"},
    {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Complete"},
    {orderNo:"LP05071631",stationId:"58754",item:4,duration:"75 Seconds",assigned:"Dennis Stewart",img:userImage,dateTime:"25 Jun'21 12.56pm",status:"Pending"}
]

const Dashboard = ()=>{
    
    return(

       <Fragment>
        <Navbar/>
        <div className="mainContainer">
            <div className="element-section">
                <div className="container">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="ehdn1">Form Elements</h2>
                            </div>
                            <div class="col-md-6"><InputTextField type="text" label="Name" /></div>
                            <div class="col-md-6"><InputTextField type="email" label="Email" /></div>
                            <div class="col-md-6"><InputTextField type="number" label="PhoneNo" /></div>
                            <div class="col-md-6"><InputTimerField label="Select Timer" /></div>
                            <div class="col-md-6"><InputCalendarField  label="Calendar" /></div>
                            <div class="col-md-6"><InputVarianceField  label="Variance" /></div>
                            <div class="col-md-6"><InputPasswordField  label="Password" /></div>
                            <div class="col-md-6"><InputTextFieldTopLabel  label="How many days will you need to close on the property?" /></div>
                            <div class="col-md-6"><SelectBox   /></div>

                            <div class="col-md-12"><InputTextAreaField label="Message"/></div>

                            <div class="col-12 clearfix"></div>


                            
                    
                            <div className="col-md-4">
                                <h3 class="ehdn2">Small Radio</h3>
                                <Radio name="radio-1" value="rd-1" id="1" />
                                <Radio name="radio-2" value="rd-2" id="2" />
                            </div>
                            <div className="col-md-4">
                            <h3 class="ehdn2">CheckBoxType1</h3>
                                <CheckBoxType1 name="Checkbox-1" value="Checkbox-1"/>
                                <CheckBoxType1 name="Checkbox-2" value="Checkbox-2"/>
                            </div>
                            <div className="col-md-4">
                            <h3 class="ehdn2">CheckBoxType2</h3>
                                <CheckBoxType2 name="Checkbox-1" value="Checkbox-1"/>
                                <CheckBoxType2 name="Checkbox-2" value="Checkbox-2"/>
                            </div>
                        

                        
                            <div className="col-md-4">
                            <h3 class="ehdn2">CheckBoxType3</h3>
                                <CheckBoxType3 name="Checkbox 1 Checkbox 1" value="Checkbox-1"/>
                                
                            </div>
                            <div className="col-md-4">
                            <h3 class="ehdn2">CheckBoxType4</h3>
                                <CheckBoxType4Correct name="Checkbox-1" value="Checkbox-1"/>
                                <CheckBoxType4Wrong name="Checkbox-2" value="Checkbox-2"/>
                            </div>
                            <div className="col-md-4">
                            <h3 class="ehdn2">CheckBoxType5</h3>
                                <CheckBoxType5 name="Checkbox-1 Checkbox-1 Checkbox-1" value="Checkbox-1"/>
                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="element-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="ehdn1">Button Elements</h2>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                            <div class="col-md-12 ehdn2"><h3>Filled Button</h3></div>
                                <div class="col-md-6 mb-4"><Button>Normal Button</Button></div>
                                <div class="col-md-6 mb-4"><Button style="white-fill">Normal Button</Button></div>
                                <div class="col-md-6 mb-4"><Button style="violet-light">Normal Button</Button></div>
                                <div class="col-md-6 mb-4"><GoogleButton style="dark">Sign Up With Google</GoogleButton></div>
                                <div class="col-md-12"><Button style="button--block">Full Width Button</Button></div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="row">
                            <div class="col-md-12 ehdn2"><h3>Lined Button</h3></div>
                                <div class="col-md-6 mb-4"><Button style="line">Normal Button</Button></div>
                                <div class="col-md-6 mb-4"><GoogleButton style="light">Sign Up With Google</GoogleButton></div>
                                <div class="col-md-12"><Button style=" line button--block">Full Width Button</Button></div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>




            <div class="element-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="ehdn1">Other Elements</h2>
                        </div>

                        <div class="col-md-4 mb-4">
                                    <h2 class="ehdn2">To fill badge add "active" in style</h2>
                                    <div class="badge-tabs">
                                        <Badge style="active">All</Badge>
                                        <Badge style="active inprogress">In-Progress</Badge>
                                        <Badge style="pending">Pending</Badge>
                                        <Badge style="complete">Complete</Badge>
                                    </div>
                        </div>

                        <div class="col-md-4 mb-4">
                                    <h2 class="ehdn2">badge-lg style</h2>
                                    <div class="badge-tabs">
                                        <Badge style="active badge-lg">All</Badge>
                                        <Badge style="active inprogress badge-lg">In-Progress</Badge>
                                        <Badge style="active pending badge-lg">Pending</Badge>
                                        <Badge style="active complete badge-lg">Complete</Badge>
                                    </div>
                        </div>

                        <div className="col-md-4 mb-4">
                                <h2 className="ehdn2">Search</h2>
                                <SearchBar required={true} />
                        </div>

                        <div className="col-md-4 mb-4">
                                <h2 className="ehdn2">Filter</h2>
                                <Filter />
                                <div className="mb-4"></div>
                                <Download/>
                                <div className="mb-4"></div>
                                <Share/>
                        </div>

                        <div class="col-md-4 mb-4">
                            <h3 class="ehdn2">Head Component</h3>
                            <H2>Login</H2>
                            <H3>Orders</H3  >
                            <Button style="line sm-btn">Bulk Update</Button>
                        </div>

                        <div class="col-md-12 mb-4">
                                <h2 class="ehdn2">small elements</h2>
                                <div class="row">
                                    <div class="col-md-3 mb-4"><Play time="1:28"/></div>
                                    <div class="col-md-3 mb-4"><OrderIcon title="Order" id="LP05071631" /></div>
                                    <div class="col-md-6 mb-4">
                                        <PlayCard title="Brown Box" time="1:51" type="normal"/>
                                        <PlayCard title="Brown Box" time="1:51" type="delay"/>
                                        <PlayCard title="Brown Box" time="1:51" type="cancel"/>
                                    </div>  
                                    
                                </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            <h2 class="ehdn2">Card</h2>
                            <VerticalCard />
                        </div>

                        <div class="col-md-6 mb-4">
                            <HorizontalCard />
                        </div>

                               
                            
                       
                        

                    </div>

                    <h2>Links</h2>
                    <div className="row">  
                        <div className="col-md-3"><Link to="#"  >Forgot Password?</Link></div>
                        <div className="col-md-3"><Link to="#"  >Existing User? Login</Link></div>
                        <div className="col-md-3"><Link to="#"   >Create an Account</Link></div>
                        <div className="col-md-3"><Link to="#" >Forgot Password?</Link></div>
                    </div>

                    <h2 className="ehdn2">Orders</h2>
                    <div class="col-md-12 mb-4">
                        <OrderList orders={orders} />
                    </div>

                </div>
            </div>
     
        </div>
     </Fragment>
    )
}

export default Dashboard;