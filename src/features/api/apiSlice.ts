import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath:'api',

    baseQuery:fetchBaseQuery({baseUrl:`${process.env.NEXT_PUBLIC_BASE_URL}`}),
    endpoints:(builder)=>({

        //get all locations
        getAllLocations:builder.query<any, {page:number, search_term:string, location_type:string, dimension:string}>({
            query:(args)=>{

                console.log(args)

                const {page, search_term, location_type,dimension} = args
                return {
                    url:`/location?page=${page}&&name=${search_term}&&type=${location_type}&&dimension=${dimension}`
                   }
            }

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
    }),
    //get location by id

    getLocationById:builder.query<any, any>({
        query:(location_id)=>(`/location/${location_id}`)

    }),

    }),
  




   
})




export const {useGetAllLocationsQuery, useGetResidentByIdQuery, useGetLocationByIdQuery} = apiSlice
