import React from"react";

const InputTextAreaField=({label="Message"})=>{
    return(
        <div className="form-textarea-group">
            <textarea type="text" className="form-field"></textarea>
            <p className="form-label">{label}</p>
        </div>
    )
}

export default InputTextAreaField;