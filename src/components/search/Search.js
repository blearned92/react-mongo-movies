import { Button, Container, Form, Navbar } from "react-bootstrap";
import "./Search.css";
import { useRef } from "react";
import MovieAPI from "../../api/MovieApi";
import { useDispatch } from "react-redux";
import { setSearchMovies } from "../../redux/MovieSlice";

const Search = () => {

    const term = useRef("");
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if(term.current.value){
            const response = await MovieAPI.fetchMoviesByTerm(term.current.value)
            console.log(response.results)
            dispatch(setSearchMovies({searchMovies: response.results}))
        }

    }

    return (
            <Container className="search-container">
                <Form className="d-flex">
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