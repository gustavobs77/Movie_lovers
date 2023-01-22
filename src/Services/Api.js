//   chave da API
// https://api.themoviedb.org/3/movie/550?api_key=35674ffe8e9fdc174d122e65010df406 exemplo de requisição
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api