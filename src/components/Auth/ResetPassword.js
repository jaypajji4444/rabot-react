import React  from"react";
import { rabotLogo } from "../../img";
import {H2,InputPasswordField,Button,GoogleButton,Link} from "../../reusableComponents"


const ResetPassword = ()=>{
    return(
        <div className="admin-container auth-center">

        <div className="main-auth">

            <div className="auth-logo">
                <img src={rabotLogo} alt=""/>
            </div>

            <div className="login-box">
                
                <p className="reset-link">Reset Link sent to <Link to="#">user@domain.com</Link></p>
                <H2>Reset Password</H2>
    
                
                <InputPasswordField label="Enter New Password" type="password" name="new-password" id="new-password"/>
                <InputPasswordField label="Re-Enter New Password" type="password" name="reenter-password" id="reenter-password"/>
                
                <div className="auth-btn">
                    <Button>Update Password</Button>
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

export default ResetPassword;