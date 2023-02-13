import { createAsyncThunk } from "@reduxjs/toolkit";
// axios to make up a request. 
import axios from 'axios';
// auto generate name form faker lib
import { faker } from '@faker-js/faker';
// 2. providing the base type that descreibes purpose of req
// 2nd arg async fn, create user and send it to api
const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:3005/users', {
        // body of request contains some info to be addressed. 
        name: faker.name.fullName()
    });
    return response.data;
});

export { addUser };