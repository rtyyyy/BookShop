import React from "react";
import './details.css'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import Header from "../header/header";
import { useParams } from "react-router-dom";
function BookItem( ){
    const {id , img , title, author, price,age,release, pages,description} = useParams()
    
    return(
        <div className="book__wrapper--item">
            <Header/>
            <div className="book__content--item">
            
            
            <div className="book__image">
            <img src={img?.slice(1)} alt="" style={{width:400, height:600 }} />
            </div>
            <div style={{display:"flex"}}>
            <div className="book__info">
                <h1 className="book__title--item">{title?.slice(1)}</h1>
                <h3 className="book__author--item">{author?.slice(1)}</h3>
                <div className="book__info--list">
                <ul>
                    <li className="book__restriction">Age restriction</li>
                    <li className="book__release">Release date</li>
                    <li className="book__pages">Pages</li>
                    <li>Goods ID</li>
                </ul>
                <ul>
                    <li className="book__restriction">{age?.slice(1)}</li>
                    <li className="book__release">{release?.slice(1)}</li>
                    <li className="book__pages">{pages?.slice(1)}</li>
                    <li className="book__id">{id?.slice(1)}</li>
                </ul>
                </div>
                
                
                
            </div>
            <div className="book__buttons">
                <p className="book__price--item"> {price?.slice(1)}</p>
                <div style={{display:'flex'}}>
                <button className="buy__button">Buy </button>
                <button className="book__button--item" style={{marginRight:20}}> <BsBookmarkHeartFill/></button>
                </div>
                <div className="book__delivery">
                    <ul>
                        <li>
                        <p>Delivery by courier, 3$  Tomorrow</p>
                        </li>
                        <li><p>To the chain stores, Free  Tomorrow</p></li>
                        <li><p>To the pick-up points, 2$ Tomorrow</p></li>
                    </ul>
                    
                </div>
                
            </div>
            </div>
            
        </div>
        <div className="book__desc--item">
        <p>{description?.slice(1)}</p>
        </div>
        
    </div>
    )
}

export default BookItem