import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        featuredMovies: [],
        currentMovie: {},
        currentMovieTrailers: [],
        searchMovies: []
    },
    reducers: {
        setFeaturedMovies:(state, action)=>{
            const {featuredMovies} = action.payload;
            console.log("Set featured")
            console.log(featuredMovies)
            state.featuredMovies = featuredMovies;
        },
        setCurrentMovie:(state, action) => {
            const {currentMovie} = action.payload;
            state.currentMovie = currentMovie;
        },
        setCurrentMovieTrailers:(state, action) =>{
            const {currentMovieTrailers} = action.payload;
            state.currentMovieTrailers = currentMovieTrailers;
        }, 
        setSearchMovies: (state, action) => {
            const {searchMovies} = action.payload;
            state.searchMovies = searchMovies;
        }
    }
})

export const selectFeaturedMovies = (state) => state.movie.featuredMovies;
export const selectCurrentMovie = (state) => state.movie.currentMovie;
export const selectCurrentMovieTrailers = (state) => state.movie.currentMovieTrailers;
export const selectSearchMovies = (state) => state.movie.searchMovies;
export const {setFeaturedMovies, setCurrentMovie, setCurrentMovieTrailers, setSearchMovies} = MovieSlice.actions;
export default MovieSlice.reducer;