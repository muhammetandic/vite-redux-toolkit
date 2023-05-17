import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://antpos.onrender.com",
  }),

  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
