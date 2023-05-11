import MockMovieCredits from "../../mock-data/MovieMovieCredits";
import MockMovieImages from "../../mock-data/MockMovieImages";

export default {
    //these need to be in try catch
    // async fetchMovies() {
    //     try {
    //         const response = await API.get("/discover/movie?append_to_response=videos")
    //         return response.data;
    //     } catch (err) {
    //         console.log(err);
    //         return ["Something went wrong"]
    //     }
    // },

    // async fetchMovie(id){
    //     try {
    //         const response = await API.get(`/movie/${id}?append_to_response=videos`)
    //         return response.data;
    //     } catch (err) {
    //         console.log(err);
    //         return {id: "Something went wrong"}
    //     }
    // },

    async fetchMovieCredits(id){
        if(id === 557){
            return MockMovieCredits;
        } else {
            return {};
        }
        // try {
        //     const response = await API.get(`/movie/${id}/credits`)
        //     return response.data;
        // } catch (err) {
        //     console.log(err);
        //     return {}
        // }
    },

    async fetchMovieImages(id) {
        if(id === 557){
            return MockMovieImages;
        } else {
            return [];
        }
        // try {
        //     const response = await API.get(`/movie/${id}/images`)
        //     return response.data;
        // } catch (err) {
        //     console.log(err);
        //     return []
        // }
    },

    // async fetchMoviesByTerm(term){
    //     try {
    //         const response = await API.get(`/search/movie?query=${term}`);
    //         return response.data;
    //     } catch (err) {
    //         console.log(err);
    //         return ["Something went wrong"]
    //     }
    // }

}