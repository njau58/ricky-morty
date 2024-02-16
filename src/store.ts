import { configureStore } from '@reduxjs/toolkit'
import {apiSlice} from './features/api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice1 } from './features/api/apiSlice1'


export const store = configureStore({
  reducer: {
 
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSlice1.reducerPath]: apiSlice1.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,apiSlice1.middleware),
})


setupListeners(store.dispatch)