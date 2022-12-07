import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:9000/property",
    baseUrl: "https://reunion-backend-pink.vercel.app/property",
  }),
  tagTypes: ["Property"],
  endpoints: (builder) => ({
    createProperty: builder.mutation({
      query: (details) => ({
        url: "/add",
        method: "Post",
        body: details,
      }),
      invalidatesTags: ["Property"],
    }),
    getSearchResult: builder.mutation({
      query: (data) => ({
        url: "/fetch",
        method:"Post",
        body:data
      }),
      providesTags: ["Property"],
    }),
  }),
});

export default appApi;
export const {
    useCreatePropertyMutation,
    useGetSearchResultMutation,
} = appApi;
