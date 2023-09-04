import React from "react";

import { configureStore , combineReducers } from '@reduxjs/toolkit'
import { reducer as chosenReducer } from "./api/chosen";

export const reducers = combineReducers({
   chosen: chosenReducer,
  
})
//объединяем редьюсеры в 1 коих немного//

export const store = configureStore({
  reducer:reducers,
   
})
//передаём главный редьюсер в хранилище//