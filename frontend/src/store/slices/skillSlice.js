import apiSlice from "./apiSlice";

const skillUrl = "/api/skill"
const skillSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addSkill: builder.mutation({
            query: (data) => ({
                url: skillUrl,
                method: "POST",
                body: data,
                formData: true
            }),
            invalidatesTags: ['skill']
        }),
        getSkills: builder.query({
            query: () => skillUrl,
            providesTags: ['skill']
        }),
        deleteSkill: builder.mutation({
            query: (id) => ({
                url: `${skillUrl}/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['skill']
        })

    })
})

export const { useAddSkillMutation, useGetSkillsQuery, useDeleteSkillMutation } = skillSlice;