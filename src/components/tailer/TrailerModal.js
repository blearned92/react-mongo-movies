import { Button } from "react-bootstrap";
import "./TrailerModal.css";
import MovieAPI from "../../api/MovieApi";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";

const TrailerModal = ({currentMovie, setTrailerModal}) => {

    let id = currentMovie.id;
    const [trailer, setTrailer] = useState({});

    useEffect(()=>{
        const fetchMovieTrailers = async () => {
            const response = await MovieAPI.fetchMovie(id);
            const length = response.videos.results.length;
            if(length > 0){
                setTrailer(response.videos.results[length-1]);
            }
            for(let i = 0; i< length; i++){                
                if(response.videos.results[i].name.includes("Official Trailer")){
                    setTrailer(response.videos.results[i])
                }
            }
        }
        fetchMovieTrailers();
    },[])

    const handleExitClick = () => {
        setTrailerModal(false);
    }
    
    console.log(currentMovie);

    return(
        <div className="trailer-modal-wrapper">
            <div className="trailer-modal-header">
                <h4>{trailer.name}</h4>
                <Button className="trailer-modal-botton" onClick={handleExitClick}>X</Button>
            </div>
            <div className="trailer-container">
                <Trailer trailer={trailer}/>
            </div>
        </div>
    )
}

export default TrailerModal;