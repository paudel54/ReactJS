import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-77073/us-central1/api' // THE API (cloud fn) URL
});

export default instance;

// axios is  used in prof env instead of Js fetch api : provides ease of baseUrl
