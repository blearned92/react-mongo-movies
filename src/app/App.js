import './App.css';
import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../components/Layout';
import Header from '../components/header/Header';
import Trailer from '../components/tailer/Trailer';
import Reviews from '../components/reviews/Reviews';
import NotFound from '../components/notFound/NotFound';
import API from '../api/Api';
import MovieAPI from "../api/MovieApi"
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { useDispatch } from 'react-redux';
import { setFeaturedMovies } from '../redux/MovieSlice';

function App() {

  const dispatch = useDispatch();

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovieData = async (movieId) => {
    const movieData = await API.fetchMovieData(movieId);
    setMovie(movieData);
    setReviews(movieData.reviews)
  }

  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await MovieAPI.fetchMovies();
      dispatch(setFeaturedMovies({featuredMovies: response.results}))
    }
    fetchMovies();

  },[])

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element ={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:id" element={<Trailer/>}/>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
