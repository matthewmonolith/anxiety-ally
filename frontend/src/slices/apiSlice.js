//slices = way to organise your state, collection of reducers and actions related to each other, each slice has own state
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
// import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: ''});//empty cos proxy


export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Post'], //types of data fetched ['User','Post','Journal','Exposure']
  endpoints: (builder) => ({}),
});

// const baseQuery = fetchBaseQuery({baseUrl: {BASE_URL}}); 
// export const apiSlice = createAPi({
//     baseQuery,
//     tagTypes: ['User'], //has to do with caching, don't want to make a fetch every single time, so can cache the data, need to add exposures, journal posts etc to this
//     endPoints: (builder) => ({ //builder makes a req, this is a parent to other api slices, need users slice, exposures slice, journal slice, all have their own endpoints
//     })
// })