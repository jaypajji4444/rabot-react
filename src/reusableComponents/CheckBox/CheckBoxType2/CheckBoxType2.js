import React from "react";

const CheckBoxType2=({label,id,value})=>{
    return (
        <div className="checkbox-box chk-rd">
            <input type="checkbox" id={id} name="checkbox1"  value={value}required />
            <label className="chk-label" for={id}>{label}</label>
        </div>
    );
}

export default CheckBoxType2;