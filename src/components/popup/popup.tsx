import {BsFacebook, BsFillPhoneFill, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import './popup.css'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaBookOpen } from 'react-icons/fa'

interface IPopup{
 active: any,
 setActive: any,
 
}
function Modal({active, setActive } : IPopup){ 
    return(
        <div className={active ? "popup__wrapper active" : "popup__wrapper"} onClick={()=> setActive(false)}>
            <div className='popup__content' onClick={e => e.stopPropagation()}>
            
                <div className='image__message'>
                    <img src="../images/helpMessage.png" alt="" />
                    <div className="social__media--popup">
                        <a href="/"><BsTwitter/></a>
                        <a href="/"><BsFacebook/></a>
                        <a href="/"><BsInstagram/></a>
                        <a href="/"><BsLinkedin/></a>
                        <a href="/"><SlSocialVkontakte/></a>
                    </div>
                    <div className="header__mark--popup">
                    <FaBookOpen style={{width:50, height:50, marginLeft:50,marginTop:-5}} />
                    <p>Big Book</p> 
                    </div>
                    <div className='header__desc--popup'>
                        <p>We are one of the most popular bookshops in Zimbabwe and we are helping to get people be better</p>
                    </div>
                </div>
                <div className='content__message--wrapper'>
                    <h2>GET IN TOUCH</h2>
                    <p>24/7  We will answer ypur questions and problems</p>
                    <div className='name__input--popup'>
                        <div>
                            
                            <CgProfile className='icon__profil'/>
                            <input placeholder="First Name" type="search" className="input__name"/>
                        </div>
                        <div>
                            <CgProfile className='icon__profil'  />
                            <input placeholder="Last Name" type="search" className="input__surname"/>
                            
                        </div>
                    </div>
                    <div className='email__field--popup'>
                        <MdEmail className='icon__email' />
                        <input placeholder="Email" type="email" className="input__email"/>
                    </div>
                    <div className='email__field--popup'>
                        <BsFillPhoneFill className='icon__email' />
                        <input placeholder="Phone" type="search" className="input__phone"/>
                    </div>
                        <div className='message__field--popup'>
                        <textarea placeholder="Describe your problem here..."  className="input__message" style={{resize: 'none'}}/>
                    </div>
                    <div className='send__message'>
                    <button style={{textAlign:'center'}}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal