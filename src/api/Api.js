import api from "./axiosConfig";
import jwtDecode from "jwt-decode";
import { properCase } from "../app/Helper";

const API = {
    //reviews
      async fetchMovieReviews(movieId) {
        try {
          const response = await api.get(`/api/v1/movies/${movieId}`);
          return response.data.reviews;
        } catch (err) {
          console.log(err);
          return [];
        }
      },

      async postReview(review, movieId, username, token) {
          try {
            const config = {
              headers: { Authorization: `Bearer ${token}` },
            };
            
            const bodyParameters = {
              body:review, imdbId:movieId, originalPoster: username,
            };
            const response = await api.post(
              "/api/v1/reviews",
              bodyParameters,
              config
            )
            return response;
        } catch (err) {
            console.log(err);
        }
      },
    
      //register
      async register(form){
        const firstname = properCase(form.firstname);
        const lastname = properCase(form.lastname);
        const username = form.username.toLowerCase();
        try {
          const response = await api.post(
            "/api/v1/auth/register",
            {
              firstname: firstname,
              lastname: lastname,
              username: username,
              password: form.password
            })
            return response;
          } catch (err) {
          console.log(err)
        }
      },

      async authenticate(username, password){
        try {
          username = username.toLowerCase();
          const response = await api.post(
            "/api/v1/auth/authenticate", 
            {username: username, password, password}
          )
          return response;
        } catch (err) {
          console.log("err");
        }
      },

      async refreshToken(token){

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        try {
          const response = await api.post(
            "/api/v1/auth/refresh-token", 
            {},
            config
          )
          return response;
        } catch (err) {
          console.log("err");
        }
      },

      async logout(token){
        try{
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          
          const response = await api.post(
            "/api/v1/auth/logout",
            {},
            config
          )
        } catch (err) {
          console.log(err);
        }
      },

      async checkUsernameTaken(username){
        username = username.toLowerCase();
        const response = await api.get(`/api/v1/users?username=${username}`)
        return response.data;
      }
}

export default API;