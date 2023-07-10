import React from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom'
import Home from './components/Home/home';
import BookItem from './components/details/bookItem';

import Contact from './components/contact/contact';
import Bonuses from './components/cashback/bonuses';

 function App() {
   
  return (
    <div className="App">
            
            
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<BookItem />} path="/bookItem/:id" />
        <Route element={<Bonuses />} path='/bonuses' />
        <Route element={<Contact />} path='/contact' />
        
      </Routes>
      
    </div>
  );
}

export default App;
