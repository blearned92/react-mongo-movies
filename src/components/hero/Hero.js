import React, { useState } from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { selectFeaturedMovies } from "../../redux/MovieSlice";
import { imagePath } from "../../app/Helper";
import TrailerModal from "../tailer/TrailerModal";

const Hero = () => {

    const navigate = useNavigate();
    const featuredMovies = useSelector(selectFeaturedMovies);
    const [trailerModal, setTrailerModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState({});

    const handleReviewClick = (movieId) => {
        navigate(`/movie/${movieId}/#reviews`)
    }

    const handleMovieClick = (movie) => {
        navigate(`/movie/${movie.id}`)
    }

    const handleModalClick = (movie) => {
        setCurrentMovie(movie);
        setTrailerModal(true);
    }

    return(
        <div className="movie-carousel-container">
            <Carousel>
                {
                    featuredMovies ? 
                    featuredMovies.map((movie)=>{
                        return(
                            <Paper key={movie.id}>
                                <div className="movie-card-container">
                                    <div className="movie-card" style={{"--img": `url(${imagePath}${movie.backdrop_path})`}}>
                                        <Search/>
                                        <div className="movie-title">
                                            <h2>{movie.original_title}</h2>
                                        </div>                                        
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={`${imagePath}${movie.poster_path}`} onClick={()=>handleMovieClick(movie)} alt=""/>
                                            </div>
                                            <div className="movie-buttons-container">
                                                    <div className="play-button-icon-container" onClick={()=>handleModalClick(movie)}>
                                                        <FontAwesomeIcon className="play-button-icon" 
                                                            icon = {faCirclePlay}
                                                        />
                                                    </div>
                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={()=>handleReviewClick(movie.id)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    }) : <p>Loading Movies...</p>    
                }
            </Carousel>
            {trailerModal && <TrailerModal currentMovie={currentMovie} setTrailerModal={setTrailerModal}/>}
        </div>
    )

}

export default Hero;