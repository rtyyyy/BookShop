import { AiOutlineShoppingCart } from 'react-icons/ai'
import Header from '../header/header'
import './chosen.css'
import { Link } from 'react-router-dom'
import Book from '../books/book'
import Footer from '../footer/footer'

function EmptyCart(){
    return(
        <div>
            <Header/>
            <div className="book__header--cart">
            <h2 style={{marginLeft:30}}>Cart </h2>
            <div><AiOutlineShoppingCart/></div>
            </div>
            <h1 style={{fontFamily:'Montserrat', fontWeight:600, color:' #3e3d53', textAlign:'center'}}>
                The cart is empty! 
            </h1>
            <div style={{display:'flex' , justifyContent:'center'}}>
                <button className="buy__button" style={{marginLeft:15}}>
                <Link to={'/'}><li  style={{ color:"white" , textDecoration:'none', listStyleType:'none', width:200, }}>Add to cart </li></Link>
                </button>
            </div>
            <div style={{marginTop:200 , marginLeft:30}}>
                <p style={{fontFamily:'Montserrat', fontWeight:600, color:' #3e3d53', fontSize:36}}>You can also check our new!</p>
            <Book/>
            </div>
            
        </div>
    )
}

export default EmptyCart