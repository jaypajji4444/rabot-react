import React  from"react";
import { rabotLogo } from "../../img";
import {InputTextField,InputPasswordField,Button,GoogleButton,Link} from "../../reusableComponents"


const SignUp = ()=>{
    return(
        <div className="admin-container auth-center">

        <div className="main-auth">

            <div className="auth-logo">
                <img src={rabotLogo} alt=""/>
            </div>

            <div className="login-box">
                <h2 className="dash-hdn text-cen">New User</h2>
    
                <InputTextField label="Email" type="email" name="email" id="email"/>
                <InputPasswordField label="Create Password" type="password" name="create-passwor" id="create-passwor"/>
                <InputPasswordField label="Retype Password" type="password" name="retype-passwor" id="retype-passwor"/>
                
                <div className="auth-btn">
                    <Button>Create Account</Button>
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

export default SignUp;