import { useEffect, useState } from "react";
import { useHref, useNavigate, useParams } from "react-router-dom";
import MovieApi from "../../api/MovieApi"; 
import "./Movie.css";
import {imagePath} from "../../app/Helper";
import Reviews from "../reviews/Reviews";
import MovieDetails from "./MovieDetails";
import MovieTrailers from "./MovieTrailers";
import Search from "../search/Search";


const Movie = () => {

    const params = useParams();
    const movieId = params.movieId;
    const [currentMovie, setCurrentMovie] = useState({});
    const navigate = useNavigate();

    const checkPathForReview = () => {
        const path = window.location.href;
        if(path.includes("#reviews")){
            const reviews = document.getElementById('reviews');
            if(reviews !== null){
                console.log('review not null')
                reviews.scrollIntoView();
            }
        }
    }

    useEffect(()=>{
        const fetchMovieData = async () => {
            const response = await MovieApi.fetchMovie(movieId);
            setCurrentMovie(response)
            checkPathForReview();
        }
        fetchMovieData();
    },[])

    return(
        currentMovie.id ? 
            currentMovie.id === "Something went wrong" ? 
            <p>Something went wrong</p> :
                <div className="movie-container">
                <div className="movie-banner">
                    <div className="movie-card" style={{backgroundImage: `url(${imagePath}${currentMovie.backdrop_path})`}}>
                        <Search/>
                    </div>
                </div>
                <MovieDetails currentMovie={currentMovie}/>
                <MovieTrailers currentMovie={currentMovie}/>
                <Reviews imdb_id={currentMovie.imdb_id}/>
                {checkPathForReview()}
                </div>
         : <p>Loading</p>
    )
}

export default Movie;