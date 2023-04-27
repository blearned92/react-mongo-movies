import { useSelector } from "react-redux";
import { selectSearchMovies } from "../../redux/MovieSlice";
import { Table } from "react-bootstrap";
import "./SearchMovies.css";

const SearchMovies = () => {

    const searchMovies = useSelector(selectSearchMovies);
    const imagePath = "https://image.tmdb.org/t/p/original"

    const handleClick = (movie) => {
        console.log(movie)
    }

    return (
        <div className="search-movies-wrapper">
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
        </div>
    )
}

export default SearchMovies;