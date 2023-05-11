import { Table } from "react-bootstrap";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import MovieAPI from "../../../api/MovieApi";
import { formatter, imagePath } from "../../../app/Helper";

const MovieDetails = ({currentMovie}) => {

    const [cast, setCast] = useState("N/A");
    const [director, setDirector] = useState("N/A");
    const [producer, setProducer] = useState("N/A");
    const [screenplay, setScreenplay] = useState("N/A");
    const [companies, setCompanies] = useState("N/A");
    const [countries, setCountries] = useState("N/A");
    const [languages, setLanguages] = useState("N/A");
    const [posters, setPosters] = useState([]);
    const [backdrops, setBackdrops] = useState ([]);
    const [logos, setLogos] = useState ([]);

    const columns = [
        ["Director:", director], 
        ["Screenplay:", screenplay], 
        ["Producr:", producer], 
        ["Starring:", cast], 
        ["Production Companies:", companies],
        ["Release Dates:", currentMovie.release_date],
        ["Country:", countries],
        ["Languages:", languages],
        ["Budget:", formatter.format(currentMovie.budget)],
        ["Box Office:", formatter.format(currentMovie.revenue)],
        ["Runtime:", currentMovie.runtime],
        ["Release Date:", currentMovie.release_date]
    ]

    const sortCast = (cast) => {
        let actors = "";
        const max = 6;

        for(let i=0; i<max; i++){
            if(i === max-1){
                actors = actors.concat(cast[i].name)
            } else {
                actors = actors.concat(cast[i].name + ", ")
            }
        }

        setCast(actors);
    }

    const sortCrew = (crew) => {
        for(let i=0; i<crew.length; i++){
            if(crew[i].job === "Director"){
                setDirector(crew[i].name)
            }
            if(crew[i].job === "Producer"){
                setProducer(crew[i].name)
            }
            if(crew[i].job === "Screenplay"){
                setScreenplay(crew[i].name);
            }
        }
    }

    const sortWithSetter = (array, setter) => {
        let arrayString = "";
        const max = array.length;
        for(let i=0; i<max; i++){
            if(i === max-1){
                arrayString = arrayString.concat(array[i].name)
            } else {
                arrayString = arrayString.concat(array[i].name + ", ")
            }
        }
        setter(arrayString);
    }

    useEffect(()=>{
        const fetchMovieCredits = async () => {
            const response = await MovieAPI.fetchMovieCredits(currentMovie.id);
            if(response.cast){
                sortCast(response.cast);
            }
            if(response.crew){
                sortCrew(response.crew);
            }
        }
        const fetchMoviePosters = async () => {
            const response = await MovieAPI.fetchMovieImages(currentMovie.id);
            if(response.posters){
                setPosters(response.posters);
            }
            if(response.backdrops){
                setBackdrops(response.backdrops);
            }
            if(response.logos){
                setLogos(response.logos);
            }
        }
        sortWithSetter(currentMovie.production_companies, setCompanies);
        sortWithSetter(currentMovie.production_countries, setCountries);
        sortWithSetter(currentMovie.spoken_languages, setLanguages);
        fetchMovieCredits();
        fetchMoviePosters();
    },[])

    return (
        <div className="movie-details-container" data-testid="movie-details-container">
            <div className="movie-details-header">
                <h1>{currentMovie.title}</h1>
            </div>
            <div className="movie-details-body">
                <div className="movie-details-body-left">
                    <h4>Description:</h4>
                    {currentMovie.overview}
                    {posters.length > 0 && <img className="movie-details-poster" src={imagePath + posters[0].file_path} alt=""/>}
                </div>
                <div className="movie-details-body-right">
                    <Table className="movie-details-body-table">
                        <tbody>
                            {columns.map((column)=>{
                                return(
                                    <tr key={column[0]}>
                                        <td style={{"color":"gold"}}>{column[0]}</td>
                                        <td>{column[1]}</td>
                                    </tr>
                                )
                            })}                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;