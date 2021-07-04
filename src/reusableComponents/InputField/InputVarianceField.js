import React from 'react';


const InputVarianceField = ({label="Variance",value,onChangeHandler,required=false})=>{
    return(
        <div className="form-grp form-grp-var">
            <input type="text" name="variance" className="form-field" required={required} onChange={onChangeHandler} />
            <p className="form-label">{label}</p>
            <i className="var-chart ph-currency-dollar"></i>
        </div>
    )
}

export default InputVarianceField;