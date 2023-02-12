import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// 'value' contains a base type that describes the purpose of fetch req
// here createAsyncThunk('users/fetch')=>  reduxtoolkit auto concatinates 'users/fetch/pending or that string can have anything handled by redux toolkit
// what gets dispatched is the action with type of 'users/fetch/pending'
// or 'users/fetch/fulfilled'
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    // upon this get request we get response like as here list of data obj
    // response.data === [{ id: 1, name: 'myra' }]
    //step3; accessing this data into reducer to update state
    return response.data;
});

// automatically generated action types magic of redux-toolkit tunk
// fetchUsers.pending === "users/fetch/pending"
// fetchUsers.fulfilled === "users/fetch/fulfilled"
// fetchUsers.rejected === "users/fetch/rejected"
// are automatically added in by default on creation of createAsyncThunk

export { fetchUsers };