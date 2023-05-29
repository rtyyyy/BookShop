import React from "react";
import './bookList.css'
interface IBooks{
    book: any
}
function Book({book} : IBooks){
    

    return(
        <div className="book__item">
            <div className="book__img">
            <img src={book.img} alt="" style={{width:200, height:300 }}  />
            </div>
        
        <div>
            <p className="book__author">{book.author}</p>
            <h5 className="book__title">{book.title}</h5>
            <p className="book__price">{book.price}</p>
        </div>
        </div>
    )
}

export default Book