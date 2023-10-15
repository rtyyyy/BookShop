// import { api } from "./api";
import { createSlice } from "@reduxjs/toolkit";
//Reducer - это функция, которая принимает текущее состояние и действие, и возвращает новое состояние. //

//Slice - это функция,  которая представляет собой набор логики для управления определенной частью глобального состояния.//
// Он содержит  начальное состояния, редьюсеры для обработки действий и селекторы для доступа к состоянию.//

// } // состояние по умолчанию//
const initialState = []
export const favoritesSlice = createSlice({
    name: 'chosen',
    initialState,
    reducers:{
        // редьюсер для добавления и удаления из избранных//
        toggleFavorites:(state , {payload: book})=>{
            const isExists = state.some(b => b.id === book.id)

            if (isExists){
                const index = state.findIndex(i => i.id === book.id) //ищем элемент по индексу//
                if (index !== -1){              // если индекс не равен -1 (только в этом случае индекс был найден)то в этом случае мы удаляем //
                    state.splice( index , 1)
                }
            } else {state.push(book)} // добавить если isExist отработало то добавить книгу//
            
        }
    }
})

export const { actions , reducer} = favoritesSlice


