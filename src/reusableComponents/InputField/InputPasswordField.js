import React from 'react';


const InputPasswordField = ({label="Password",value,onChangeHandler,required=false})=>{
    return(
        <div class="form-grp">
            <input class="form-field" type="password" id="info-password" name="info-password" required={required} onChange={onChangeHandler} />
            <p class="form-label">{label}</p>
            <i class="icon-right view-pass ph-eye-slash"></i>
        </div>
    )
}

export default InputPasswordField;