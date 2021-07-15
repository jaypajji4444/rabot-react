import React from "react";

const CheckBoxType2=({label,id,value,style="",name})=>{
    return (
        <div className={`checkbox-box chk-rd ${style}`}>
            <input type="checkbox" id={id} name={name?name:id}  value={value}required />
            <label className="chk-label" for={id}>{label}</label>
        </div>
    );
}

export default CheckBoxType2;