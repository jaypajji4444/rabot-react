import React, { useState,Fragment  } from 'react';

import "./DashBoard.css"
import googleIcon from "../reusableComponents/icons/google.png"
import {SelectBox,InputTextField,SubmitButton,GoogleButton,Link,OrderList,SearchBar,CheckBox,Tags} from "../reusableComponents/index"

let selectBoxData = ["Option-1","Option-2","Option-3"]

const Dashboard = ()=>{
    
    return(

       
        <div className="m-5">
            <h1>Input</h1>
                <div className="row">
                    <div className="col-md-6">
                    <form>
                        <div class="form-group"><InputTextField type="text" id="text-1" name="text" required={false} label="Name" /></div>
                        <div className="form-group"><InputTextField type="password" id="text-1" name="text" required={false} label="Password" /></div>
                    </form>
                    </div>

                    <div className="col-md-6">
                    <form>
                        <SearchBar placeholder="Search" />
                        <div className="form-group"><CheckBox   name="Option-1"  value="Option-1" /></div>
                    </form>
                    </div>
                </div>
        <h1>Button</h1>
            <div className="row">
            <div className="col-md-2"><SubmitButton  id="text-1" name="text" classname="button_class" >Login</SubmitButton></div>
                <div className="col-md-2"><SubmitButton  id="text-1" name="text" classname="button_class" >Create Account</SubmitButton></div>
                <div className="col-md-2"><GoogleButton label="Login with Google" classname="google_btn"/></div>
                <div className="col-md-2"><GoogleButton label="SignUp with Google" classname="google_btn"/></div>
                <div className="col-md-4"><SelectBox options={selectBoxData}/></div>
                
            </div>

            <h1>Tags</h1>
            <div className="row">
                <div className="col-md-2"><Tags classname="tag tag-text-blue" text="Complete" /></div>
                <div className="col-md-2"><Tags classname="tag tag-text-yellow" text="Complete" /></div>
                <div className="col-md-2"><Tags classname="tag tag-bg-black" text="Complete" /></div>
                <div className="col-md-2"><Tags classname="tag tag-bg-yellow" text="Complete" /></div>
                <div className="col-md-2"><Tags classname="tag tag-bg-blue" text="Complete" /></div>
                <div className="col-md-2"><Tags classname="tag tag-bg-grey" text="Complete" /></div>
            </div>



            <h1>Links</h1>
                <div className="row">
                    <div className="col-md-3"><Link to="#" text="Forgot Password?" classname="underline" /></div>
                    <div className="col-md-3"><Link to="#" text="Existing User? Login" /></div>
                    <div className="col-md-3"><Link to="#" text="Create an Account" classname="underline" /></div>
                    <div className="col-md-3"><Link to="#" text="Forgot Password?" /></div>
                </div>

            <h1>Order</h1>
            <OrderList />

     </div>
        
    )
}

export default Dashboard;