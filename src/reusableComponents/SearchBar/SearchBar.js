import React from "react";
import "./SearchBar.css"

const SearchBar = ({placeholder})=>{
    return (
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder={placeholder}/>
        </div>
    )
}

export default SearchBar;