import React  from"react";
import { rabotLogo } from "../../img";
import {H2,InputTextField,InputPasswordField,Button,GoogleButton,Link} from "../../reusableComponents"


const ForgotPassword = ()=>{
    return(
        <div className="admin-container auth-center">

        <div className="main-auth">

            <div className="auth-logo">
                <img src={rabotLogo} alt=""/>
            </div>

            <div className="login-box">
                <H2>Forgot Password?</H2>
    
                <InputTextField label="Send Email" type="email" name="email" id="email"/>
               
                
                <div className="auth-btn">
                    <Button>Send Email</Button>
                </div>

            </div>

            <div className="auth-signup">
                <GoogleButton style="dark">Signup with Google</GoogleButton>
                <Link to="/signin" >Exisiting User? Login</Link>
            </div>
        </div>
       
    </div>

    )
}

export default ForgotPassword;