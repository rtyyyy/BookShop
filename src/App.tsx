import React from 'react';
import './App.css';
import {Routes , Route, Link} from 'react-router-dom'
import Home from './components/Home/home';
import BookItem from './components/details/bookItem';


import Bonuses from './components/cashback/bonuses';
import Categories from './components/categories/categories';
import Art from './components/categories/category/art';
import Children from './components/categories/category/children';
import Fantasy from './components/categories/category/fantasy';
import History from './components/categories/category/history';
import Music from './components/categories/category/music';
import Romance from './components/categories/category/romance';
import ArtBook from './components/details/artBook';
import ChildBook from './components/details/childBook';
import FantasyBook from './components/details/fantasyBook';
import HistoryBook from './components/details/historyBook';
import MusicBook from './components/details/musicBook';
import RomanceBook from './components/details/romanceBook';
import Chosen from './components/chosen/chosen';

 function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<BookItem   />} path="/bookItem/:id" />
        <Route element={<ArtBook   />} path="/artBook/:id" />
        <Route element={<ChildBook   />} path="/childBook/:id" />
        <Route element={<FantasyBook   />} path="/fantasyBook/:id" />
        <Route element={<HistoryBook   />} path="/historyBook/:id" />
        <Route element={<MusicBook  />} path="/musicBook/:id" />
        <Route element={<RomanceBook  />} path="/romanceBook/:id" />
        <Route element={<Bonuses />} path='/bonuses' />
        <Route element={<Art />} path='/art' />
        <Route element={<Chosen />} path='/chosen' />
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
