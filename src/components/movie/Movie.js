import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentMovie, setCurrentMovie } from "../../redux/MovieSlice";
import MovieApi from "../../api/MovieApi"; 
import "./Movie.css";
import {imagePath} from "../../app/Helper";
import Reviews from "../reviews/Reviews";


const Movie = () => {

    const params = useParams();
    const movieId = params.movieId;
    const currentMovie = useSelector(selectCurrentMovie);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchMovieData = async () => {
            const response = await MovieApi.fetchMovie(movieId);
            console.log(response)
            dispatch(setCurrentMovie({currentMovie: response}))
        }
        fetchMovieData();
    },[])

    return(
        currentMovie.id === "Something went wrong" ? <p>Something went wrong</p> :
        <div className="movie-container">
            <div className="movie-banner">
                <div className="movie-card" style={{"background-image": `url(${imagePath}${currentMovie.backdrop_path})`}}>
                    {/* <div className="movie-title-container">
                        <h1>{currentMovie.title}</h1>
                        <h4>{currentMovie.tagline}</h4>
                    </div> */}

                </div>
                <div>

                </div>
            </div>
            <p>Runtime: {currentMovie.runtime} minutes</p>
            <p>Release Date: {currentMovie.release_date}</p>
            <p>Revenue: ${currentMovie.revenue}</p>
            <p>{currentMovie.status}</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.release_date}</p>
            {/* spoke_languages */}
            {/* genres */}
            {/* production_countries */}
            {/* production_companies */}
            <p>{currentMovie.overview}</p>
            <Reviews/>

        </div>
    )
}

export default Movie;