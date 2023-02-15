// This is going to Create Store, export it, serves as a central export point,
// where everything related to redux stuff. 
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
// !whenever we create apis, slice is generated for us automatically
// and slice in turn creates a reducers.
// we need to connect that reducer to store
// it's acheived by adding another key value pair to reducer object
import { photosApi } from "./apis/photosApi";

// creating our store
// export the store so, it can be wired into react side of our application.
export const store = configureStore({
    reducer: {
        users: usersReducer,
        // here albums is the name of reducer path
        // albums: albumsApi.reducer
        // we write on this way to pointing, is to avoid the string typo error
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    // middleware is required part of setup process

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }

});
// temp we can access store form browser console with this assignment!
// window.store = store;
// listeners are only used once in a project. it doesn't have to be re introduced. 
setupListeners(store.dispatch);

// store index.js can be a central export point for everything related to redux
// export from this location can be easily accessed form other comp without makeing deep nested import
// find everything exported from fetchUsers and export from index.js here
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/albumsApi';

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photosApi';