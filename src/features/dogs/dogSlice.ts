import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const DOGS_API_KEY = "458ea8b7-f8a6-4ebd-b363-370a0becbe42"

interface Breed {
  id: string,
  name: string,
  image: {
    url: string
  }
}

export const dogApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void> ({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        } 
      })
    }
  }
})

export const { useFetchBreedsQuery } = dogApiSlice


