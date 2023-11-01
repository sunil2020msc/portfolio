import apiSlice from "./apiSlice";

const aboutUrl = "/api/about"
const aboutSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAbout: builder.mutation({
            query: (data) => ({
                url: aboutUrl,
                body: data,
                formData: true,
                method: "POST"
            }),
            invalidatesTags: ['about']
        }),
        getAbout: builder.query({
            query: (data) => aboutUrl,
            providesTags: ['about']
        }),
        deleteAbout: builder.mutation({
            query: (id) => ({
                url: `${aboutUrl}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['about']
        })
    })
})


export const { useCreateAboutMutation, useGetAboutQuery, useDeleteAboutMutation } = aboutSlice