import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: "" })

const apiSlice = createApi({
    baseQuery,
    tagTypes: ['socialIcon', 'typo', 'about', 'workExp', 'skill', 'project'],
    endpoints: (builder) => ({})
})

export default apiSlice;