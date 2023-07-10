import React from "react";
import Header from "../header/header";
import CashTitle from "./cashTitle";
import './bonuses.css'
import Content from "./content";
import Footer from "../footer/footer";

function Bonuses(){
    return(
        <div className="bonuses__wrapper">
            <Header/>
            <div className="cashback__bg">
            <img src="./images/bookCashbackBg.jpg" alt="" />
            <CashTitle/>
            <Content/>
            <Footer/>
            </div>
        </div>
    )
}

export default Bonuses