import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            // body of req is not included on fetch
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => {
                        return { type: 'photo', id: photo.id };
                    });
                    tags.push({ type: 'AlbumPhoto', id: album.id });
                    return tags;
                },
                query: (album) => {
                    return {
                        url: './photos',
                        // params that defines query strings
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    };
                }
            }),
            // query string is not included in adding , but body to req is req
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'AlbumPhoto', id: album.id }]
                },
                query: (album) => {
                    return {
                        method: 'POST',
                        url: './photos',
                        body: {
                            albumId: album.id,
                            // height, width and true indicates we always get a random photos. 
                            url: faker.image.abstract(150, 150, true)
                        }
                    };
                }
            }),
            // no query string no body for req. id and method are fundamentals here
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: 'Photo', id: photo.id }];
                },
                query: (photo) => {
                    return {
                        method: 'DELETE',
                        url: `/photos/${photo.id}`
                    };
                }
            }),

        };
    }
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi;

// exporting photosApi, we can link up with redux store. 
export { photosApi };