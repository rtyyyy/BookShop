import {BsCalendarDate, BsFacebook, BsFillCreditCardFill, BsFillPhoneFill, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import './payment.css'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaBookOpen } from 'react-icons/fa'
import CreditCardInput from './numberField'
import CreditCardExpirationDateInput from './expiryDate'
import CreditCardCvcInput from './cvc'

interface IPopup{
 active: any,
 setActive: any,
 
}
function Payment({active, setActive } : IPopup){ 
    return(
        <div className={active ? "payment__wrapper active" : "payment__wrapper"} onClick={()=> setActive(false)}>
            <div className='payment__content' onClick={e => e.stopPropagation()}>
            
                
                <div className='card__payment--wrapper'>
                    <h2>Payment details</h2>
                    <p>Enter your card data</p>
                    
                    <div className='email__field--payment'>
                        <MdEmail className='icon__email' /> 
                        <input placeholder="Email" type="email" className="input__email--card"/>
                    </div>
                    <div className='email__field--payment'>
                        <BsFillCreditCardFill className='icon__email' />
                        <CreditCardInput/>
                    </div>
                    <div className='name__input--payment'>
                        <div>
                            
                            <BsCalendarDate className='icon__card'/>
                            <CreditCardExpirationDateInput/>
                        </div>
                        <div>
                            <BsFillCreditCardFill className='icon__card'  /> 
                            <CreditCardCvcInput/>
                        </div>
                    </div>
                    <div className='send__payment'>
                    <button onClick={()=> setActive(false)} style={{textAlign:'center'}}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment