import React from "react";
import { useState } from "react";
import './chosen.css'
import Header from "../header/header";
import {TiDeleteOutline} from "react-icons/ti"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useChosen } from '../hooks/useChosen';
import { useActions } from "../hooks/useActions";
import Payment from "../payment/payment";

interface IBook{
  id : string,
  title: string,
  author: string,
  price: string,
  img: string,
  age: string,
  pages: number,
  release: number,
  description: string
}


const Cart = () => {
  const {toggleFavorites} = useActions() 
  const {chosen} = useChosen()
  const [paymentActive , setPaymentActive] = useState(false)
 console.log(chosen)
 
 const sum = chosen.reduce((arr: any , acc: any) => arr + acc.price , 0).toFixed(2)
 
  return (
    <div>
        <Header/>
        <div className="book__header--cart">
            <h2>Cart </h2>
            <div><AiOutlineShoppingCart/></div>
        </div>
    <div className="cart__content--cart">

        
    <div className="book__wrapper--cart">
    {chosen.map((book: IBook | null) =>(
        <div key={book?.id} >
            <div className="book__item--cart">
                <div>
                    <img src={book?.img} alt="" />
                </div>
                <div className="book__info--cart">
                    <h4>{book?.title}</h4>
                    <i>{book?.author}</i>
                </div>
                <div className="book__price--cart">
                    <h3>{book?.price}$</h3>
                </div>
                <div className="book__remove--cart">
                    <div><TiDeleteOutline onClick={() => toggleFavorites(book)} /></div>
                </div>
            </div>
            
              
            
        </div>
        ) )}
        <div className="line"></div>

    </div>
        <div className="payment__window--cart">
            <div>
                <p style={{marginLeft:15}}>Total chosen  : {chosen.length} g.</p>
            </div>
            <div>
                <p >Total cost: <span style={{color: 'rgba(146, 36, 45, 0.884)'}}>{sum}$</span> </p>
            </div>
            <div style={{display:'flex'}}>
                <button className="buy__button" style={{marginLeft:15}}><li onClick={() => setPaymentActive(true)} style={{ color:"white" , textDecoration:'none', listStyleType:'none', }}>Buy</li>
                <Payment active={paymentActive} setActive={setPaymentActive}  /> </button>
            </div>
            
        </div>
        </div>
    </div>
  );
};

export default Cart;