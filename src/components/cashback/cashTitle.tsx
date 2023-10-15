import React from "react";
import './bonuses.css'

import {BiDiamond} from 'react-icons/bi'
import {BsTicketFill} from 'react-icons/bs'
import {GiHumanPyramid} from 'react-icons/gi'
function CashTitle(){
    
    return(
        <div className="cashback__wrapper">
            <div  className="cashback__window">
            <h1>Cashback for purchases</h1>
            <h2>Save up bonus points and pay for your purchases with them</h2>
            <div className="cashback__list--conditions">
                <ul>
                    <li> <p><BiDiamond style={{width:50, height:50}} color="white"/></p> <h5>
                    Up to 10% of the cost of the product will be returned with bonuses</h5>
                    </li>
                    <li><p><BsTicketFill style={{width:50, height:50}}color="white"/></p>
                    <h5>Pay up to 30% of the purchase price</h5>
                    </li>
                    <li><p><GiHumanPyramid style={{width:50, height:50}} color="white"/></p>
                    <h5>The program is valid for all registered buyers</h5>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default CashTitle