import { apiSlice } from "../api/apiSlice";

export const jobSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // 👥 Get all jobs
        getJobs: builder.query({
            query: () => "/jobs",
            providesTags: (result = []) => [
                "Job",
                ...result.map(({ id }) => ({ type: "Job", id })),
            ],
        }),

        // 👥 Get all jobs
        getJobsWithFilters: builder.query({
            query: () => "/jobs",
            providesTags: (result = []) => [
                "Job",
                ...result.map(({ id }) => ({ type: "Job", id })),
            ],
        }),

        // 👤 Get job by ID
        getJobById: builder.query({
            query: (id) => `/job/${id}`,
            providesTags: (result = []) => [
                "Job",
                ...result.map(({ id }) => ({ type: "Job", id })),
            ],
        }),

        createJob: builder.mutation({
            query: (data) => ({
                url: "/jobs",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Job", "Analytics"],
        }),

        // ✏️ Update job
        updateJob: builder.mutation({
            query: ({ id, data }) => ({
                url: `/jobs/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Job", "Analytics"],
        }),

        // 🗑 Delete Job
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Job", "Analytics"],
        }),


    })
})

export const {
    useGetJobsQuery,
    useGetJobsWithFiltersQuery,
    useGetJobByIdQuery,
    useCreateJobMutation,
    useDeleteJobMutation,
    useUpdateJobMutation,
} = jobSlice;