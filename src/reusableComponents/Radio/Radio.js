import React,{Fragment} from "react";

const Radio=({name,value,id})=>{
    return (
    <Fragment>
         <div className="radio-box">
            <input type="radio" id={id} name="radio-small" value={value} required />
            <label for={id}>{name}</label>
        </div>
                            
    </Fragment>
    );
}

export default Radio;