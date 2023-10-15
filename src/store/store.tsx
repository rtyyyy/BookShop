// import React from "react";

import { configureStore , combineReducers } from '@reduxjs/toolkit'
// import cart from './api/chosen'
import { reducer as chosenReducer } from "./api/chosen";

export const reducers = combineReducers({
   chosen: chosenReducer,
  
})
//объединяем редьюсеры в 1 коих немного//

export const store = configureStore({
  reducer:reducers,
   
})
export type RootState = ReturnType<typeof reducers>;
//передаём главный редьюсер в хранилище//
// 