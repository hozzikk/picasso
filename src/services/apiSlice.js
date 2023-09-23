import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `posts?_limit=10&_page=${page}`,
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = api;

export default api;