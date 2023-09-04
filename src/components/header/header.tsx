import React, { useState } from "react";
import {FaBookOpen} from "react-icons/fa"
import './header.css'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Modal from "../popup/popup";
import ChoisenIcon from "./chosenIcon";

function Header(){
    const [modalActive , setModalActive] = useState(false)
    return (
        <div className="header__wrapper">
        <div className="header__mark">
        <FaBookOpen style={{width:50, height:50, marginLeft:50,marginTop:-5}} />
        <p>Big Book</p>
        </div>
        <div className="header__list">
            <ul>
                <li><Link to={'/'} style={{textDecoration:'none' , color: "white"}}>Home</Link></li>
                <li> <Link to={'/bonuses'} style={{textDecoration:'none' , color: "white"}}>Bonuses</Link> </li>
                <li style={{color:'rgba(66, 66, 124, 0.897)'}}><li onClick={() => setModalActive(true)} style={{ color:"white" , textDecoration:'none'}}>Write us</li>
                <Modal active={modalActive} setActive={setModalActive}  /> </li>
                <li> <Link to={'/chosen'}><ChoisenIcon/></Link></li>
            </ul>
        </div>
        <div >
            <button className="reg__button" style={{ color: "white"}}>Log in</button>
        </div>
        </div>
    )
}

export default Header