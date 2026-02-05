import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // 👥 Get all users (admin/employer)
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["User"],
        }),

        // 👤 Get user by ID
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),

        // ✏️ Update user
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUpdateUserMutation,
} = userSlice;
