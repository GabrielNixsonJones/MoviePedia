import axios from 'axios';

const TMDB_API_KEY = '1d22049032d18b24c320f140cdd7deeb';
const BASE_URL = 'https://api.themoviedb.org/3';

const TmdbAxios = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: TMDB_API_KEY,
    },
});

export default TmdbAxios;