import axios from "axios";

const instance = axios.create({
    baseURL: '..url of api.' // THE API (cloud fn) URL
});

export default instance;

// axios is  used in prof env instead of Js fetch api : provides ease of baseUrl
