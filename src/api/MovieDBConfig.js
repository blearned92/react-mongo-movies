import axios from 'axios';

const APIKey = process.env.REACT_APP_MOVIE_API_KEY;

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: APIKey
    }
})