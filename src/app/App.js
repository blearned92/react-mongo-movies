import './App.css';
import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../components/Layout';
import Header from '../components/header/Header';
import Trailer from '../components/tailer/Trailer';
import Reviews from '../components/reviews/Reviews';
import Movie from "../components/movie/Movie";
import NotFound from '../components/notFound/NotFound';
import MovieAPI from "../api/MovieApi"
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { useDispatch } from 'react-redux';
import { setFeaturedMovies, setSearchMovies } from '../redux/MovieSlice';

function App() {

  const dispatch = useDispatch();
  //this all will happen the moment the app starts
  //maybe check for user in cookies
  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await MovieAPI.fetchMovies();
      dispatch(setFeaturedMovies({featuredMovies: response.results}))
      dispatch(setSearchMovies({searchMovies:response.results}))
    }
    fetchMovies();
  },[])

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/Trailer/:id" element={<Trailer/>}/>
          <Route path="/Reviews/:movieId" element={<Reviews/>}></Route>
          <Route path="/Movie/:movieId" element={<Movie/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
