import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import SearchMovies from "../searchMovies/SearchMovies";
import { useDispatch } from "react-redux";
import { setSearchMovies } from "../../redux/MovieSlice";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const setSearchMoviesNull = () => {
            dispatch(setSearchMovies({searchMovies: []}))
        }
        setSearchMoviesNull();
    },[])

    return (
        <div>
            <Hero/>
            <SearchMovies/>
        </div>
    )
}

export default Home;