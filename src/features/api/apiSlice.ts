import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath:'api',

    baseQuery:fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BASE_URL}`}),
    endpoints:(builder)=>({

        //get all locations
        getAllLocations:builder.query<any, void>({
            query:()=>(`/location`)

        }),

         //get residentbyid

    getResidentById:builder.query<any, any>({
        query:(resident_id)=>(`/character/${resident_id}`)

    }),

    createNote :builder.mutation<any, object>({
        query:(note)=>({
            url:'/api/sendNote',
            body:note

        })
    })

    }),





   
})




export const {useGetAllLocationsQuery, useGetResidentByIdQuery} = apiSlice
