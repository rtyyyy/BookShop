
import { createApi, fetchBaseQuery ,  } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath:'api',
    // tagType is for refresh list of items//
    tagTypes:['Book'],
    // take data from this url//
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005/book/'
    }),
    // endpoint for getting items (server request)// 
    endpoints: builder =>({
        getBooks:builder.query({           // query is for getting post and etc.//
            query:() => '/'
        })
    }),
})

export const {useGetBooksQuery} = api   //take to the api//