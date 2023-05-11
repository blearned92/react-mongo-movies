const API = {
    async fetchMovieReviews(movieId) {
        return [];
    },

    async postReview(review, movieId, username, token) {
        return {};
    },
    
    //   //register
    //   async register(form){
    //     const firstname = properCase(form.firstname);
    //     const lastname = properCase(form.lastname);
    //     const username = form.username.toLowerCase();
    //     try {
    //       const response = await api.post(
    //         "/api/v1/auth/register",
    //         {
    //           firstname: firstname,
    //           lastname: lastname,
    //           username: username,
    //           password: form.password
    //         })
    //         return response;
    //       } catch (err) {
    //       console.log(err)
    //     }
    //   },

    //   async authenticate(username, password){
    //     try {
    //       username = username.toLowerCase();
    //       const response = await api.post(
    //         "/api/v1/auth/authenticate", 
    //         {username: username, password, password}
    //       )
    //       return response;
    //     } catch (err) {
    //       console.log("err");
    //     }
    //   },

    //   async refreshToken(token){

    //     const config = {
    //       headers: { Authorization: `Bearer ${token}` },
    //     };

    //     try {
    //       const response = await api.post(
    //         "/api/v1/auth/refresh-token", 
    //         {},
    //         config
    //       )
    //       return response;
    //     } catch (err) {
    //       console.log("err");
    //     }
    //   },

    //   async logout(token){
    //     try{
    //       const config = {
    //         headers: { Authorization: `Bearer ${token}` },
    //       };
          
    //       const response = await api.post(
    //         "/api/v1/auth/logout",
    //         {},
    //         config
    //       )
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },

    //   async checkUsernameTaken(username){
    //     username = username.toLowerCase();
    //     const response = await api.get(`/api/v1/users?username=${username}`)
    //     return response.data;
    //   }
}

export default API;