import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // 🔐 Register
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data,
            }),
        }),

        // 🔑 Login
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Auth"],
        }),

        // 📧 Verify email (gmail)
        verifyEmail: builder.mutation({
            query: (body) => ({
                url: "/auth/verify_email",
                method: "POST",
                body, // send exactly the object you pass
            }),
        }),

        // 🔢 Verify OTP
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/verify_otp",
                method: "POST",
                body: data, // { email, otp }
            }),
        }),

        // 🔢 Resend Email Verification Otp
        resendVerificationOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/resend_verification_otp",
                method: "POST",
                body: data, // { email, otp }
            }),
        }),

        // 🔢 Resend Forgot Password Otp
        resendForgotPasswordOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/resend_forgot_password_otp",
                method: "POST",
                body: data, // { email, otp }
            }),
        }),

        // 🔁 Forgot password
        forgotPassword: builder.mutation({
            query: (body) => ({
                url: "/auth/forgot_password",
                method: "POST",
                body,
            }),
        }),

        // 🔐 Reset password
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/reset_password",
                method: "POST",
                body: data, // { token, newPassword }
            }),
        }),

        // 👤 Current user (rehydration)
        me: builder.query({
            query: () => "/auth/me",
            providesTags: ["User"],
        }),

        // 👤 Current user (rehydration)
        refresh: builder.mutation({
            query: () => ({
                url: "/auth/refresh",
                method: "POST",
            }),
        }),

        // 🚪 Logout
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth", "User"],
        }),

        // Upload Image
        avatarUpload: builder.mutation({
            query: (data) => ({
                url: "/auth/upload_image",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyEmailMutation,
    useVerifyOtpMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useMeQuery,
    useLogoutMutation,
    useAvatarUploadMutation,
    useResendForgotPasswordOtpMutation,
    useResendVerificationOtpMutation,
    useRefreshMutation
} = authApiSlice;
