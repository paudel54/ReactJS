import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// considering user is an arg containing with id and name, user be an obj
const removeUser = createAsyncThunk('users/remove', async (user) => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`)

    // fix!!!
    return response.data;
});

export { removeUser };