import apiSlice from "./apiSlice";
const socialUrl = "/api/socialicon"
const socialIconSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createSocialIcon: builder.mutation({
            query: (data) => ({
                url: `${socialUrl}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['socialIcon']
        }),
        getSocialIcons: builder.query({
            query: () => socialUrl,
            providesTags: ['socialIcon']
        }),
        deleteSocialIcon: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `${socialUrl}/${id}`,
            }),
            invalidatesTags: ['socialIcon']
        }),
        updateSocialIcon: builder.mutation({
            query: (data, id) => {
                console.log("data", data.data)
                console.log("id", data.id)
                return {
                    method: "PUT",
                    url: `${socialUrl}/${data.id}`,
                    body: data.data
                }
            },
            invalidatesTags: ['socialIcon']
        })
    })
})

export const { useCreateSocialIconMutation, useGetSocialIconsQuery, useDeleteSocialIconMutation, useUpdateSocialIconMutation } = socialIconSlice