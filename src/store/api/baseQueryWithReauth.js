import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, clearCredentials } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        // try refresh
        const refreshResult = await baseQuery(
            { url: "/auth/refresh", method: "POST" },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            api.dispatch(
                setCredentials({
                    user: refreshResult.data.user,
                    token: refreshResult.data.accessToken,
                })
            );

            // retry original request
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(clearCredentials());
        }
    }

    return result;
};
