import React from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom'
import Home from './components/Home/home';
import BookItem from './components/details/bookItem';

import Contact from './components/contact/contact';
import Bonuses from './components/cashback/bonuses';
import Categories from './components/categories/categories';
import Art from './components/categories/category/art';
import Children from './components/categories/category/children';
import Fantasy from './components/categories/category/fantasy';
import History from './components/categories/category/history';
import Music from './components/categories/category/music';
import Romance from './components/categories/category/romance';
import ArtBook from './components/details/artBook';

 function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<BookItem   />} path="/bookItem/:id" />
        <Route element={<ArtBook   />} path="/artBook/:id" />
        <Route element={<Bonuses />} path='/bonuses' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Art />} path='/art' />
        <Route element={<Children />} path='/children' />
        <Route element={<Fantasy />} path='/fantasy' />
        <Route element={<History />} path='/history' />
        <Route element={<Music />} path='/music' />
        <Route element={<Romance />} path='/romance' />
      </Routes>
      
    </div>
  );
}

export default App;
