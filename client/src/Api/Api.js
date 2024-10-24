import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500" }),
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
    // SearchProperty: builder.query({
    //   query: (
    //     search,
    //     address,
    //     bedroom,
    //     bathroom,
    //     price,
    //     propertyType,
    //     offer,
    //     furnished,
    //     type,
    //     packing
    //   ) => `/property/?${value}`,
    // }),
  }),
});
//http://localhost:5500/property/estate

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPropertyQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetUsersQuery,
  useGetPropertyIdQuery,
  useSearchPropertyQuery,
} = Api;
