import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import SearchMovies from "../searchMovies/SearchMovies";

const Home = () => {

    return (
        <div data-testid="home">
            <Hero/>
            <SearchMovies/>
        </div>
    )
}

export default Home;