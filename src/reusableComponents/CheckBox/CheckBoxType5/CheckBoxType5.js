import React,{Fragment} from "react";

const CheckBoxType5=({label,value})=>{
    return (
    <Fragment>
        <div className="checkbox-box check-five">
            <input type="checkbox" id="checkbox51" name="checkbox51" required value={value} />
            <label className="chk-label" for="checkbox51">
                <span>{label}</span>
            </label>
        </div>
    </Fragment>
    );
}

export default CheckBoxType5;