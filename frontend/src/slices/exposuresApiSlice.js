import { EXPOSURES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const exposureApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({getExposures: builder.query({
        query:() => ({
            url: EXPOSURES_URL,
        }),
        keepUnusedDataFor: 5
    }),
    createExposure: builder.mutation({
        query: (body) => ({
            url: EXPOSURES_URL,
            method: 'POST',
            body
        }),
        invalidatesTags: ['Exposure']
     })
    })
})

export const {useGetExposuresQuery, useCreateExposureMutation} = exposureApiSlice;