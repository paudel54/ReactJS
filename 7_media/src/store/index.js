// This is going to Create Store, export it, serves as a central export point,
// where everything related to redux stuff. 
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

// creating our store
// export the store so, it can be wired into react side of our application.
export const store = configureStore({
    reducer: {
        users: usersReducer,
        // here albums is the name of reducer path
        // albums: albumsApi.reducer
        // we write on this way to pointing, is to avoid the string typo error
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    // middleware is required part of setup process

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware);
    }

});
// temp we can access store form browser console with this assignment!
// window.store = store;

setupListeners(store.dispatch);

// store index.js can be a central export point for everything related to redux
// export from this location can be easily accessed form other comp without makeing deep nested import
// find everything exported from fetchUsers and export from index.js here
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation
} from './apis/albumsApi';
