import React from "react";
import {FaBookOpen} from "react-icons/fa"
import './header.css'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="header__wrapper">
        <div className="header__mark">
        <FaBookOpen style={{width:50, height:50, marginLeft:50,marginTop:-5}} />
        <p>Big Book</p>
        </div>
        <div className="header__list">
            <ul>
                <li> <Link to={'/about'} style={{textDecoration:'none'}}>About us</Link> </li>
                <li><Link to={'/contact'} style={{textDecoration:'none'}}>Contact</Link></li>
                <li><BsBookmarkHeartFill/></li>
            </ul>
        </div>
        <div >
            <button className="reg__button">Log in</button>
        </div>
        </div>
    )
}

export default Header