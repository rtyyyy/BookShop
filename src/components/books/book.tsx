import React from "react";
import './bookList.css'
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";


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

function Book(){
    const [books, setBooks] = useState<IBook[]>([]);
    
    useEffect(()=>{
        fetch("http://localhost:3005/book/")  //просто собираем весь массив с сервера и подгружаем на клиент//
        .then(res =>  res.json())
        .then(book => setBooks(book))
        .catch(error => console.log("ашыпка"));
    }, []) ; 
// console.log(books) 
    return(
        
        
        
        <div  className="book__item--wrapper">
        {books.map(book => (
            <div key={book.id} >
                <Link to={`http://localhost:3000/bookItem/${book.id}`} >
            <div  className="book__item">
            <div className="book__img">
            <img src={book.img} alt="" style={{width:200, height:300 }}  />
            </div>
            <div className="book__description">
            <p className="book__title" style={{listStyleType:'none', marginLeft:0}}>{book.title}</p>
            <h5 className="book__author">{book.author}</h5>
            <p className="book__price" style={{ marginLeft:0}}>{book.price}</p>
        </div>
        </div>
        </Link>
        </div>
        ))}
      </div>
      
    )
}

export default Book