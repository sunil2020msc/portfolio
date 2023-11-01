import apiSlice from "./apiSlice";

const contactUrl = "/api/contact"
const contactSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createContact: builder.mutation({
            query: (data) => ({
                url: contactUrl,
                body: data,
                formData: true,
                method: "POST"
            }),
            invalidatesTags: ['about']
        }),
        getContact: builder.query({
            query: () => contactUrl,
            providesTags: ['about']
        }),
    })
})


export const { useCreateContactMutation, useGetContactQuery } = contactSlice