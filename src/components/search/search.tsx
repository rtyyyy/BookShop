import React from "react";
import './search.css'
import Input from "../input/input";
function Search (){
    return(
        <div className="search__wrapper">
            <div className="search__input">
            <h2 className="search__title">Once you  learn to read, you will be forever free</h2>
                <div className="search__field">
                <Input/>
                <button>Search</button>
                </div>
            
            </div>
            <div>

            </div>
            
        </div>
    )
}

export default Search