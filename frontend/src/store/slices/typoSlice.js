import apiSlice from "./apiSlice";

const typoUrl = "/api/typo"
const typoSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTypo: builder.query({
            query: () => typoUrl,
            providesTags: ['typo']
        }),
        getTypoList: builder.query({
            query: () => `${typoUrl}/list`,
            providesTags: ['typo']
        }),
        createTypo: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: typoUrl,
                body: data
            }),
            invalidatesTags: ['typo']
        }),
        deleteTypo: builder.mutation({
            query: (id) => ({
                url: `${typoUrl}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['typo']
        }),
        updateTypo: builder.mutation({
            query: (data) => {
                console.log("in update Typo", data)
                return { url: `${typoUrl}/${data.id}`, body: data.data, method: "PUT" }
            },
            invalidatesTags: ['typo']
        })


    })

})

export const { useGetTypoQuery, useCreateTypoMutation, useDeleteTypoMutation, useGetTypoListQuery, useUpdateTypoMutation } = typoSlice