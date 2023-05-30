import React from "react";
import './home.css';
import Search from "../search/search";
import Categories from '../categories/categories';
import { useGetBooksQuery } from "../../store/api/api";
import BookList from '../books/bookList';
import Book from '../books/book';
import Header from '../header/header';

function Home(){
    const {data , isLoading} = useGetBooksQuery(0)
    const categories =[{ id: 1 , title: 'Arts & Architect' , img:'/images/art.jpg'},
                    { id: 2 , title: 'Children' , img:'/images/children.jpg'},
                    { id: 3 , title: 'History' , img:'/images/fantasy.jpg'},
                    { id: 4 , title: 'Romance' , img:'/images/history.jpg'},
                    { id: 5 , title: 'Music' , img:'/images/music.jpg'},
                    { id: 6 , title: 'Fantasy' , img:'/images/romance.jpg'}]
    return(
        <div>
<Header/>
      <Search/>
      <Categories categories={categories}/>
      <BookList/>
      <div className='book__wrapper'>
      {isLoading ? <div>
        Loading...
      </div> : data ? data.map(book => <Book  key={book.id} book={book}/>) : <div>not found</div> }
      </div>
      
        </div>
    )
}

export default Home