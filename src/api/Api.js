import api from "./axiosConfig";
import jwtDecode from "jwt-decode";
import { setUser } from "../redux/UserSlice";
import { setLoginError } from "../redux/ErrorSlice";
import { properCase } from "../app/Helper";

const API = {
    //Movies
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


      //reviews
      async postReview(review, movieId) {
          try {
            const response = await api.post("/api/v1/reviews",{reviewBody:review, imdbId:movieId})
            return response.data;
        } catch (err) {
            console.log(err);
            return {};
        }
      },
    
      //register
      async register(form, dispatch){
        const firstname = properCase(form.firstname);
        const lastname = properCase(form.lastname);
        const username = form.username.toLowerCase();
        console.log(firstname)
        console.log(lastname)
        console.log(username)
        console.log(form.password)
        try {
          const response = await api.post(
            "/api/v1/auth/register",
            {
              firstname: firstname,
              lastname: lastname,
              username: username,
              password: form.password
            })
            const token = response.data.token;
            const user = jwtDecode(token);
            console.log(user);
            dispatch(setUser({
              // firstname: user.firstname,
              // lastname: user.lastname,
              username: user.sub
            }))
        } catch (err) {
          console.log(err)
        }

        //lowercase the username
        //call to api and get response
        //set user into redux state
        //return true if successful

      },

      async authenticate(username, password, dispatch){
        try {
          const response = await api.post("/api/v1/auth/authenticate", {username: username, password, password})
          const token = response.data.token;
          const user = jwtDecode(token);
          dispatch(setUser({
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            username: response.data.username,
            role: response.data.role
          }));
          // dispatch(setUser({username: user.sub}));
          dispatch(setLoginError({error:null}))
          // localStorage.setItem('token', token);
          return true;
        } catch (err ) {
          console.log("err");
          dispatch(setLoginError({error:"Invalid credentials"}))
          return false;
          //     dispatch(actions.loginUserFail());
        }
      },

      async checkUsernameTaken(username){
        username = username.toLowerCase();
        const response = await api.get(`/api/v1/users?username=${username}`)
        return response.data;
      }
}

export default API;