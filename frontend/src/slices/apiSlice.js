import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});

// const baseQuery = fetchBaseQuery({baseUrl: ''}); //empty cos proxy

// export const apiSlice = createAPi({
//     baseQuery,
//     tagTypes: ['User'], //has to do with caching, don't want to make a fetch every single time, so can cache the data, need to add exposures, journal posts etc to this
//     endPoints: (builder) => ({ //builder makes a req, this is a parent to other api slices, need users slice, exposures slice, journal slice, all have their own endpoints
//     })
// })