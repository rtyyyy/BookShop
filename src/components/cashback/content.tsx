import React from "react";
import './bonuses.css'
import Accordion from "../accordions/accordions";
function Content(){
    return(
        <div className="content__wrapper">
            <div className="content__item--wrapper">
                <div className="content__image--cashback">
                    <img src="./images/guide-1.jpg" alt="" />
                </div>
                <div className="content__desc--cashback">
                    <h2>How to accumulate bonus points?</h2>
                    <h3>Get points for purchases on the website, in the app or in stores. The amount of the bonus for the product depends on the size of your personal cashback.</h3>
                    <p>Bonus points are awarded the next day after receiving the goods.</p>
                </div>
            </div>
            <div className="content__item--wrapper">
                <div className="content__desc--cashback">
                    <h2>How to increase cashback?</h2>
                    <h3>The amount of personal cashback depends on the amount of purchases over the last 365 days. The larger the amount, the more bonuses for new purchases.</h3>
                    <p>The maximum cashback size is 10%.</p>
                </div>
                <div className="content__image--cashback">
                    <img src="./images/guide-2.jpg" alt="" />
                    <div className="content__percentage--img">
                        <div className="first__point--percentage">5%</div>
                        <div className="second__point--percentage">8%</div>
                        <div className="third__point--percentage">10%</div>
                    </div>
                    
                </div>
            </div>
            <div className="content__item--wrapper">
                <div className="content__image--cashback">
                    <img src="./images/guide-3.jpg" alt="" />
                </div>
                <div className="content__desc--cashback">
                    <h2>How to spend bonus points?</h2>
                    <h3>Get points for purchases on the website, in the app or in stores. The amount of the bonus for the product depends on the size of your personal cashback.</h3>
                    <p>Bonus points are awarded the next day after receiving the goods.</p>
                </div>
            </div>
            <div className="claim__bonus--area">
                <div className="claim__bonus--text">
                    <p>New customers — 5% cashback on their first purchases</p>
                </div>
                <div className="claim__bonus--button">
                    <button  >Claim bonus!</button>
                </div>
            </div>
            <Accordion/>
        </div>
    )
}

export default Content