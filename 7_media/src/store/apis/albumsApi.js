import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    // config  to obj to describe each individual request. .
    // there contains 3 required properties we need to add each one at a time

    //3.automatically creates us slice behind the scene
    // slice used to stores tone sof state realeted to data , reuest status, errors
    // all the states should be stored somewhere onto redux store so we use reducerPath hook
    // here string of reducer path can be named anything.  
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        // will holds a configuration
        // pre-config, browser default fetch replacement to axions
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {

            addAlbum: builder.mutation({
                invalidatesTags: ['Album'],
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            // fetchAlbum: is a simplified name:: 
            // builder method contains query , since it's get , could have mutation
            // here fetchAlbums is a key to use useFetchAlbumQuery hook!!
            // this is config obj below 
            fetchAlbums: builder.query({
                // names can be anythinh cap or singular , simply we write te resources
                providesTags: ['Album'],
                query: (user) => {
                    return {
                        // configuration object, tell how to fetch items
                        // url is path for req
                        url: '/albums',
                        // params contains query string for request
                        params: {
                            userId: user.id
                        },
                        // method described is of get and here we have no body for request
                        method: 'GET'
                    };
                }
            })
        };
    }
});

export const {
    // automatically generated hooks, Must follow naming convention
    useFetchAlbumsQuery,
    useAddAlbumMutation
} = albumsApi;
export { albumsApi };