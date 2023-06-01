import React from "react";
import './bookList.css'
import { Link } from "react-router-dom";
interface IBooks{
    book: any
}
function Book({book} : IBooks){
    

    return(
        <Link to={`/bookItem/:${book.id}/:${book.title}/:${book.author}/:${book.price}/:${book.age}/:${book.release}/:${book.pages}/:${book.description}`} className="book__item">
        
        <div >
            <div className="book__img">
            <img src={book.img} alt="" style={{width:200, height:300 }}  />
            </div>
        <div className="book__description">
            <p className="book__title">{book.title}</p>
            <h5 className="book__author">{book.author}</h5>
            <p className="book__price">{book.price}</p>
        </div>
        </div>
        </Link>
    )
}

export default Book