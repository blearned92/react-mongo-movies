import API from "./MovieDBConfig";

const MovieAPI = {
    //these need to be in try catch
    async fetchMovies() {
        try {
            const response = await API.get("/discover/movie?append_to_response=videos")
            return response.data;
        } catch (err) {
            console.log(err);
            return ["Something went wrong"]
        }
    },

    async fetchMovie(id){
        try {
            const response = await API.get(`/movie/${id}?append_to_response=videos`)
            return response.data;
        } catch (err) {
            console.log(err);
            return {id: "Something went wrong"}
        }
    },

    async fetchMovieCredits(id){
        try {
            const response = await API.get(`/movie/${id}/credits`)
            return response.data;
        } catch (err) {
            console.log(err);
            return {}
        }
    },

    async fetchMovieImages(id) {
        try {
            const response = await API.get(`/movie/${id}/images`)
            return response.data;
        } catch (err) {
            console.log(err);
            return []
        }
    },

    async fetchMoviesByTerm(term){
        try {
            const response = await API.get(`/search/movie?query=${term}`);
            return response.data;
        } catch (err) {
            console.log(err);
            return ["Something went wrong"]
        }
    }

}

export default MovieAPI;