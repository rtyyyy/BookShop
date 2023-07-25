import React from 'react';
import { ICategories } from '../../types/categories';
import './categories.css'
import { Link } from 'react-router-dom';
function CategoriesItem(){
    
    return(
        <div className='categories__wrapper--item'>
            <ul className='categories__list'>
                <Link to='/art' ><li className='category__item'><img src='/images/art.jpg' alt=""  className='category__img'/>
                <h4 className='category__title--item'>Arts & Architect</h4></li></Link>
                <Link to='/children' ><li  className='category__item'><img src='/images/children.jpg' alt=""  className='category__img'/>
                <h4 className='category__title--item'>Children</h4></li></Link>
                <Link to='/fantasy' ><li  className='category__item'> <img src='/images/fantasy.jpg' alt=""  className='category__img'/>
                <h4 className='category__title--item'>Fantasy</h4></li></Link>
                <Link to='/history' ><li  className='category__item'> <img src='/images/history.jpg' alt=""  className='category__img'/>
                <h4 className='category__title--item'>History</h4></li></Link>
                <Link to='/music' ><li  className='category__item'><img src='/images/music.jpg'alt=""  className='category__img'/>
                <h4 className='category__title--item'>Music</h4></li></Link>
                <Link to='/romance' ><li  className='category__item'><img src='/images/romance.jpg'alt=""  className='category__img'/>
                <h4 className='category__title--item'>Romance</h4></li></Link>
            </ul>
            
        </div>
    )
}

export default CategoriesItem