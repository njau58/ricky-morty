import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice1 = createApi({
  reducerPath: "api1",

  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    //creates note
    createNote: builder.mutation<any, object>({
      query: (note) => ({
        url: "/api/sendNote",
        body: note,
        method: "POST",
      }),
    }),
    //get notes by resident id

    getNotesById: builder.query({
      query: (resident_id) => ({
        url: `/api/notes/${resident_id}`,
        method:'GET'
      
      }),
    }),
  }),
});

export const { useCreateNoteMutation, useGetNotesByIdQuery } = apiSlice1;
