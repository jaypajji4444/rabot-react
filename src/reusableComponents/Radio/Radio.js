import React,{Fragment} from "react";

const Radio=({name,value,id,label})=>{
    return (
    <Fragment>
         <div className="radio-box">
            <input type="radio" id={id} name={name} value={value} required />
            <label for={id}>{label}</label>
        </div>
                            
    </Fragment>
    );
}

export default Radio;