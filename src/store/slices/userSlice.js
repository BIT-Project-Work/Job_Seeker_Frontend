import { apiSlice } from '../api/apiSlice'

export const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // 👥 Get all users (admin/employer)
        getAllUsers: builder.query({
            query: () => "/user",
            providesTags: ["User"],
        }),

        // Get Users with Filters
        getUsersWithFilters: builder.query({
            query: () => "/user",
            providesTags: (result = []) => [
                "User",
                ...result.map(({ id }) => ({ type: "User", id })),
            ],
        }),

        // 👤 Get user by ID
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),

        // ✏️ Update user
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/user/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),

        // ✏️ Update user
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `/user/profile`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["User", "Auth"],
        }),

        // 🗑 Delete Job
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User", "Analytics"],
        }),

        // Delete resume
        deleteResume: builder.mutation({
            query: (body) => ({
                url: `/user/resume`,
                method: "DELETE",
                body
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUsersWithFiltersQuery,
    useGetUserByIdQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
    useDeleteResumeMutation,
    useUpdateProfileMutation
} = userSlice;
