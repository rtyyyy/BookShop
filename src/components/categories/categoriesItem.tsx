import React from 'react';
import { ICategories } from '../../types/categories';
import './categories.css'
interface Category {
    category:ICategories
}
function CategoriesItem({category}:Category){
    return(
        <div className='categories__wrapper--item'>
        <img src={category.img} alt=""  className='category__img'/>
        <h4 className='category__title--item'>{category.title}</h4>
        </div>
    )
}

export default CategoriesItem