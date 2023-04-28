import { useSelector } from "react-redux";
import { selectSearchMovies } from "../../redux/MovieSlice";
import { Table } from "react-bootstrap";
import "./SearchMovies.css";
import { imagePath } from "../../app/Helper";
import { useNavigate } from "react-router-dom";

const SearchMovies = () => {

    const searchMovies = useSelector(selectSearchMovies);
    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div className="search-movies-wrapper">
            {searchMovies.length > 0 && <h1>Search Results</h1>}
            {searchMovies.length > 0 && searchMovies[0] === "No results found for search term: " ?
                <p>{`${searchMovies[0]} "${searchMovies[1]}"`}</p> :
                <Table className="search-movies-table">
                    <tbody>
                    {
                        searchMovies.map((movie, index)=>{
                            return(
                                <tr key={index} onClick={() => handleClick(movie)} >
                                    <td className="search-movies-table-image">
                                        <img src={imagePath + movie.poster_path}/>
                                    </td>
                                    <td>
                                        <h2>{movie.title}</h2>
                                        <p>{movie.release_date}</p>
                                        <p>{movie.overview}</p>
                                        <p>Score: {movie.vote_average}</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default SearchMovies;