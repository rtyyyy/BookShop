import React from "react";
import './home.css';
import Search from "../search/search";
import Categories from '../categories/categories';
import { useGetBooksQuery } from "../../store/api/api";
import BookList from '../books/bookList';
import Book from '../books/book';
import { useState , useEffect } from "react";
import Header from '../header/header';
import Footer from "../footer/footer";
interface IBooks{
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
function Home( ){
    const {data , isLoading} = useGetBooksQuery(0)
    
    const categories =[{ id: 1 , title: 'Arts & Architect' , img:'/images/art.jpg'},
                    { id: 2 , title: 'Children' , img:'/images/children.jpg'},
                    { id: 3 , title: 'History' , img:'/images/fantasy.jpg'},
                    { id: 4 , title: 'Romance' , img:'/images/history.jpg'},
                    { id: 5 , title: 'Music' , img:'/images/music.jpg'},
                    { id: 6 , title: 'Fantasy' , img:'/images/romance.jpg'}]
                    
    
  //   fetch('http://localhost:3005/book/1')
  // .then(response => response.json())
  // .then((data: IBooks[]) => {
  //   data.forEach(obj => {
  //     const div = document.createElement('div');
  //     div.innerText = `ID: ${obj.id}, Name: ${obj.title}`;
  //     document.body.appendChild(div);
  //   });
  // });
          
    return(
        <div>
<Header/>
      <Search/>
      <Categories categories={categories}/>
      <BookList/>
      {/* <div className='book__wrapper'>
      {isLoading ? <div>
        Loading...
      </div> : data ? data.map(book => <Book  key={book.id} book={book}/>) : <div>not found</div> }
      </div> */}
      
      <Book/>
      <Footer/>
        </div>
    )
}

export default Home