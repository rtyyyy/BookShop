import React from "react";
import './footer.css'
import {BsTwitter , BsFacebook , BsInstagram, BsLinkedin} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
function Footer(){
    return(
        <div className="footer__wrapper">
            <div className="social__media--footer">
            <a href="/"><BsTwitter/></a>
            <a href="/"><BsFacebook/></a>
            <a href="/"><BsInstagram/></a>
            <a href="https://pnrtscr.com/kqrkc7"><BsLinkedin/></a>
            <a href="/"><SlSocialVkontakte/></a>
            </div>
            <div className="links__footer">
                <a href="/">Privacy policy </a>
                
                <a href="/">Terms of use</a>
                
                <a href="/">Our contacts</a>
            </div>
            <div className="copyright__footer">
                <p>© Copyright <strong>BigBook </strong>2023. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer