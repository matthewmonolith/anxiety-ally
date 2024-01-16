import { POSTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  //no fetch or axios, all through redux toolkit :O
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      keepUnusudedDataFor: 5, //value is seconds no milisecs
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `${POSTS_URL}/${id}`,
      }),
      keepUnusudedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: POSTS_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `${POSTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    likePost: builder.mutation({
      query: ({id}) => ({
        url: `${POSTS_URL}/${id}`,
        method: "PUT"
      })
    })
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreateProductMutation,
  useDeletePostMutation,
  useLikePostMutation
} = postsApiSlice;
