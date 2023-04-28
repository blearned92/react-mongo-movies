import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { selectFeaturedMovies } from "../../redux/MovieSlice";
import { imagePath } from "../../app/Helper";

const Hero = () => {

    const navigate = useNavigate();
    const featuredMovies = useSelector(selectFeaturedMovies);

    const handleReviewClick = (movieId) => {
        navigate(`/Reviews/${movieId}`)
    }

    const handleMovieClick = (movie) => {
        navigate(`/movie/${movie.id}`)
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
                                                <Link to={`/Trailer/${movie.id}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon" 
                                                            icon = {faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>
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
        </div>
    )

}

export default Hero;