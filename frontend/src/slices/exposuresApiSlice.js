import { EXPOSURES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const exposureApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExposures: builder.query({
      query: () => ({
        url: EXPOSURES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    createExposure: builder.mutation({
      query: (body) => ({
        url: EXPOSURES_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Exposure"],
    }),
    updateCompletion: builder.mutation({
      query: ({ id }) => ({
        url: `${EXPOSURES_URL}/${id}`,
        method: "PUT",
      }),
    }),
    deleteExposure: builder.mutation({
      query:({id}) => ({
        url: `${EXPOSURES_URL}/${id}`,
        method: "DELETE",
      })
    })
  }),
});

export const {
  useGetExposuresQuery,
  useCreateExposureMutation,
  useUpdateCompletionMutation,
  useDeleteExposureMutation,
} = exposureApiSlice;
