import API from "./MovieDBConfig";

const MovieAPI = {
    async fetchMovies() {
        const response = await API.get("/discover/movie?append_to_response=videos")
        return response.data;
    },

    async fetchMovie(id){
        const response = await API.get(`/movie/${id}?append_to_response=videos`)
        return response.data.videos.results;
    },

    async fetchMoviesByTerm(term){
        const response = await API.get(`/search/movie?query=${term}`);
        return response.data;
    }

}

export default MovieAPI;