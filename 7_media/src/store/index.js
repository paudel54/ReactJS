// This is going to Create Store, export it, serves as a central export point,
// where everything related to redux stuff. 

import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

// creating our store
// export the store so, it can be wired into react side of our application.
export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

// store index.js can be a central export point for everything related to redux
// export from this location can be easily accessed form other comp without makeing deep nested import
// find everything exported from fetchUsers and export from index.js here
export * from './thunks/fetchUsers';