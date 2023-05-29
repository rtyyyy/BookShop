import React from 'react';
import { ICategories } from '../../types/categories';
import CategoriesItem from './categoriesItem';
import './categories.css'
interface Category {
categories:ICategories[]
}
function Categories({categories}: Category){
return(
    <div>
        <div className='category__title'>
            <p>Select from the category</p>
        </div>
        <div className='categories__list'>
            {
                categories.map(category =>
                <CategoriesItem 
                
                category={category}/>)
            }
        </div>
    </div>
)
}

export default Categories