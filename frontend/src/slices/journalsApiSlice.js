import { JOURNALS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const journalsApiSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({getJournals: builder.query({
            query:() => ({
                url: JOURNALS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        createJournal: builder.mutation({
            query:(body) => ({
                url: JOURNALS_URL,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Journal']
        })
    })
})

export const {useGetJournalsQuery, useCreateJournalMutation} = journalsApiSlice;