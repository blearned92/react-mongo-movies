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
            {/* <button onClick={sliderRef?.slickPrev}>
                <faChevronCircleLeft/>
            </button>
            <button onClick={sliderRef?.slickNext}>
                <faChevronCircleRight/>
            </button> */}
        <h2 className="trailers-title">Trailers</h2>
        <Slider ref={setSliderRef} {...Settings}>
          {renderTrailers}
        </Slider>
    </Container>
    )
}

export default MovieTrailers;

            {/* <Slider {...Settings}> */}

            {/* {currentMovie.videos && 
            <div className="div">
                {currentMovie.videos.results.map((video, index)=>{
                    return(
                        <div key={index} className="movie-trailer-container">
                            <Trailer trailer={video}></Trailer>
                        </div>
                    )
                })}
            </div>
            } */}

            {/* </Slider> */}
            
            {/* currentMovie.videos.results.map((video, index)=>{
                return(<div key={index}><Trailer trailer={video}></Trailer></div>)
            })} */}


            {/* <p>{videos.length}</p> */}
            {/* <div className="movie-carousel">
            {videos && <p>{videos[0].name}</p>}
            {videos.length > 0 && 
                <Slider {...settings}>
                    <div>
                        {currentMovie.videos && <Trailer trailer={currentMovie.videos.results[0]}/>}
                    </div>
                    {currentMovie.videos && <Trailer trailer={currentMovie.videos.results[0]}/>}
                </Slider>
            }
            </div>
            <p>Logos?</p> */}