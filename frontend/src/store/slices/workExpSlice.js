import apiSlice from "./apiSlice";

const workExpUrl = "/api/workExp"
const workExpSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addWorkExperience: builder.mutation({
            query: (data) => ({
                url: workExpUrl,
                method: "POST",
                body: data,
                formData: true
            }),
            invalidatesTags: ['workExp']
        }),
        getWorkExperience: builder.query({
            query: () => workExpUrl,
            providesTags: ['workExp']
        }),
        deleteWorkExperience: builder.mutation({
            query: (id) => ({
                url: `${workExpUrl}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['workExp']
        }),

    })
})

export const { useAddWorkExperienceMutation, useGetWorkExperienceQuery, useDeleteWorkExperienceMutation } = workExpSlice;