import React from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom'
import Home from './components/Home/home';
import BookItem from './components/details/bookItem';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {
 
  return (
    <div className="App">
            
          
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<BookItem />} path="/bookItem/:id/:title/:author/:price/:age/:release/:pages/:description" />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/Contact' />
      </Routes>
      
    </div>
  );
}

export default App;
