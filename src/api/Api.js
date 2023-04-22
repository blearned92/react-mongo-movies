import api from "./axiosConfig";

const API = {

    async fetchAllMovies() {
        try {
            const response = await api.get("/api/v1/movies");
            return response.data;
        } catch (err) {
           console.log(err);
           return [];
        }
      },

      async fetchMovieData(movieId) {
        try {
          const response = await api.get(`/api/v1/movies/${movieId}`);
          return response.data;
        } catch (err) {
          console.log(err);
          return {};
        }
      },

      async postReview(review, movieId) {
          try {
            const response = await api.post("/api/v1/reviews",{reviewBody:review, imdbId:movieId})
            return response.data;
        } catch (err) {
            console.log(err);
            return {};
      }

    } 

}

export default API;