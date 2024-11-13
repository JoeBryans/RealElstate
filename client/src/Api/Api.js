import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/auth/users",
    }),
    Register: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
    }),
    Login: builder.mutation({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
    }),
    getProperty: builder.query({
      query: () => "/property/estate",
    }),
    getPropertyId: builder.query({
      query: (id) => `/property/estate/${id}`,
    }),
    SearchProperty: builder.query({
      query: (value) => `/property/?${value}`,
    }),
    CreateListen: builder.mutation({
      query: (formData) => ({
        url: "/property/",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
//http://localhost:5500/property/estate

export const {
  useGetPropertyQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetUsersQuery,
  useGetPropertyIdQuery,
  useSearchPropertyQuery,
  useCreateListenMutation,
} = Api;
