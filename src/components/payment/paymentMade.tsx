
import './payment.css'


interface IPopup{
 active: any,
 setActive: any,
 
}
function PaymentMade({active, setActive } : IPopup){ 
    return(
        <div className={active ? "payment__wrapper active" : "payment__wrapper"} onClick={()=> setActive(false)}>
            <div className='payment__content' onClick={e => e.stopPropagation()}>
        
            </div>
        </div>
    )
}

export default PaymentMade