import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// considering user is an arg containing with id and name, user be an obj
const removeUser = createAsyncThunk('users/remove', async (user) => {
    // const response = await axios.delete(`http://localhost:3005/users/${user.id}`)
    await axios.delete(`http://localhost:3005/users/${user.id}`)

    // fix!!! response.data might not contain the data that reducer needs to work correctly
    // return response.data; insted of response of data return user
    // this helps in adding paylod to the action that is triggred by Async Thunk fn
    return user;
});

export { removeUser };