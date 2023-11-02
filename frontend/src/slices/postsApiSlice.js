import { POSTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({ //no fetch or axios, all through redux toolkit :O
    endpoints: (builder) => ({getPosts: builder.query({
        query:() => ({
            url: POSTS_URL,
        }),
        keepUnusudedDataFor: 5, //value is seconds no milisecs
        }),
    }),
});

export const {useGetPostsQuery} = postsApiSlice;