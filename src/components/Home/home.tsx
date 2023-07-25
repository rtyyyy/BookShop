import React from "react";
import './home.css';
import Search from "../search/search";
import Categories from '../categories/categories';
import { useGetBooksQuery } from "../../store/api/api";
import BookList from '../books/bookList';
import Book from '../books/book';
import Header from '../header/header';
import Footer from "../footer/footer";

function Home( ){
    const {data , isLoading} = useGetBooksQuery(0)

    return(
        <div>
<Header/>
      <Search/>
      <Categories />
      <BookList/>
      <Book/>
      <Footer/>
        </div>
    )
}

export default Home