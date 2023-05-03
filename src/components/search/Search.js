import { Button, Container, Form } from "react-bootstrap";
import "./Search.css";
import { useRef } from "react";
import MovieAPI from "../../api/MovieApi";
import { useDispatch } from "react-redux";
import { setSearchMovies } from "../../redux/MovieSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const term = useRef("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(term.current.value){
            const response = await MovieAPI.fetchMoviesByTerm(term.current.value)
            if(response.results.length === 0){
                dispatch(setSearchMovies({searchMovies: ["No results found for search term: ", term.current.value]}))
            } else {
                dispatch(setSearchMovies({searchMovies: response.results}))
            }
            if(window.localStorage.pathname !== "/"){
                navigate("/");
            }
        }

    }

    return (
            <Container className="search-container">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                    ref={term}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="info" className="search-button" onClick={handleSubmit}>Search</Button>
                </Form>
            </Container>
    )
}

export default Search;