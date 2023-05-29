import React from 'react';
import Header from './components/header/header';
import './App.css';
import Search from './components/search/search';
import Categories from './components/categories/categories';
import { useGetBooksQuery } from './store/api/api';
import BookList from './components/books/bookList';
import Book from './components/books/book';

function App() {
  const {data , isLoading} = useGetBooksQuery(0)
  console.log(data)
  const categories =[{ id: 1 , title: 'Arts & Architect' , img:'/images/art.jpg'},
                    { id: 2 , title: 'Children' , img:'/images/children.jpg'},
                    { id: 3 , title: 'History' , img:'/images/fantasy.jpg'},
                    { id: 4 , title: 'Romance' , img:'/images/history.jpg'},
                    { id: 5 , title: 'Music' , img:'/images/music.jpg'},
                    { id: 6 , title: 'Fantasy' , img:'/images/romance.jpg'}]
  return (
    <div className="App">
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
  );
}

export default App;
