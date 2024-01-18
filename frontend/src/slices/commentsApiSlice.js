import { COMMENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => ({
        url: `${COMMENTS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createComment: builder.mutation({
      query: (body) => ({
        url: COMMENTS_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Comment"],
    })
  }),
});

export const { useGetCommentsQuery, useCreateCommentMutation } =
  commentApiSlice;
