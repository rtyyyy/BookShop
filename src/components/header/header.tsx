import React from "react";
import {FaBookOpen} from "react-icons/fa"
import './header.css'
import {BsBookmarkHeartFill} from 'react-icons/bs'

function Header(){
    return (
        <div className="header__wrapper">
        <div className="header__mark">
        <FaBookOpen style={{width:50, height:50, marginLeft:50}} />
        <p>Big Book</p>
        </div>
        <div className="header__list">
            <ul>
                <li>About us</li>
                <li>Contact</li>
                <li><BsBookmarkHeartFill/></li>
            </ul>
        </div>
        <div className="button__header">
            <button className="reg__button">Log in</button>
        </div>
        </div>
    )
}

export default Header