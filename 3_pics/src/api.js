import axios from 'axios';
//here async has term var parameter to take user input so api query can be set anything like car, bus gir etc
const searchImages = async (term) => {
    //making API request with async and await keywords
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID iNODMAQHxs7zjxTo2zJ7Q_KHBLLyXNd123k7ietYHjM',
        },
        //terms will contain input text items, searched term
        params: {
            query: term,
        },
    });
    // console.log(response);
    return response.data.results;
};

export default searchImages;


