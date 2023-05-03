import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieTrailers.css";
import { useState } from "react";
import {Settings} from "../../app/Settings";
import Trailer from "../tailer/Trailer";
import { Container } from "react-bootstrap";

const MovieTrailers = ({currentMovie}) => {

    const [sliderRef, setSliderRef] = useState(null);

    const trailers = currentMovie.videos.results;
    let renderTrailers = trailers.map((trailer, index)=>{
            return (
                <div className="movie-trailer-container" key={index}>
                    <Trailer trailer={trailer}/>
                </div>
            )
        })

    return(
        <Container>
            <h2 className="trailers-title">Trailers</h2>
            <Slider ref={setSliderRef} {...Settings} className="slider">
            {renderTrailers}
            </Slider>
        </Container>
    )
}

export default MovieTrailers;