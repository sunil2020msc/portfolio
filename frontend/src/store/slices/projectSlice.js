import apiSlice from "./apiSlice";

const projectUrl = "/api/project"
const projectSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (data) => ({
                url: projectUrl,
                body: data,
                formData: true,
                method: "POST"
            }),
            invalidatesTags: ['project']
        }),
        getProject: builder.query({
            query: (data) => projectUrl,
            providesTags: ['project']
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `${projectUrl}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['project']
        }),
        updateProject: builder.mutation({
            query: (data) => ({
                url: `${projectUrl}/${data.id}`,
                body: data.data,
                method: "PUT",
                formData: true
            }),
            invalidatesTags: ['project']
        })
    })
})


export const { useCreateProjectMutation, useGetProjectQuery, useDeleteProjectMutation, useUpdateProjectMutation } = projectSlice