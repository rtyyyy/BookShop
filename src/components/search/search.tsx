import React, { useState } from "react";
import './search.css'
import Input from "../input/input";


function Search (){

    return(
        <div className="search__wrapper">
            <div className="search__input">
            <h2 className="search__title">Once you  learn to read, you will be forever free</h2>
                <div className="search__field">
                    <div style={{display:"flex"}}>
                        
                    <button style={{marginLeft:0, paddingLeft:50}} >Lets start!</button> 
                    </div>
                </div>
            </div>
            <div className="search__image">
                <img src="/images/bookPictureHome.png" alt="" />
            </div>
            
        </div>
    )
}

export default Search