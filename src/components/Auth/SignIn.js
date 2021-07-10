import React  from"react";
import { rabotLogo } from "../../img";
import {InputTextField,InputPasswordField,Button,GoogleButton,Link} from "../../reusableComponents"


const SignIn = ()=>{
    return(
        <div className="admin-container auth-center">

        <div className="main-auth">

            <div className="auth-logo">
                <img src={rabotLogo} alt=""/>
            </div>

            <div className="login-box">
                <h2 className="dash-hdn text-cen">Login</h2>
    
                <InputTextField label="Email" type="email" name="email" id="email"/>
                <InputPasswordField label="Password" type="password" name="password" id="password"/>
                
                <div className="auth-btn">
                    <Button>Login</Button>
                    <Link to="/password/forgot" >Forgot Password?</Link>
                </div>

            </div>

            <div className="auth-signup">
                <GoogleButton style="light">Login with Google</GoogleButton>
                <Link to="/signup" >Create An Account</Link>
            </div>
        </div>
       
    </div>

    )
}

export default SignIn;