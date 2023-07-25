import React from 'react';
import { ICategories } from '../../types/categories';
import CategoriesItem from './categoriesItem';
import './categories.css'

function Categories(){
return(
    <div>
        <div className='category__title'>
            <p>Select from the category</p>
        </div>
        <div className='categories__list'>
            
                <CategoriesItem />
                
                
            
        </div>
    </div>
)
}

export default Categories