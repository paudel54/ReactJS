import axios from 'axios';

const searchImages = async () => {
    //making API request with async and await keywords
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID iNODMAQHxs7zjxTo2zJ7Q_KHBLLyXNd123k7ietYHjM',
        },
        params: {
            query: 'cars',
        },
    });

    console.log(response);

    return response;
};

export default searchImages;
