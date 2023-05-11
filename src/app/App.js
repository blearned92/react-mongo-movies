import './App.css';
import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../components/Layout';
import Header from '../components/header/Header';
import Trailer from '../components/tailer/Trailer';
import Reviews from '../components/reviews/Reviews';
import Movie from "../components/movie/Movie/Movie";
import NotFound from '../components/notFound/NotFound';
import MovieAPI from "../api/MovieApi"
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { setFeaturedMovies, setSearchMovies } from '../redux/MovieSlice';
import API from '../api/Api';
import { selectUser, setUser } from '../redux/UserSlice';
import { checkExpirationOfToken } from './Helper';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await MovieAPI.fetchMovies();
      dispatch(setFeaturedMovies({featuredMovies: response.results}))
      dispatch(setSearchMovies({searchMovies:response.results}))
    }
    const checkTokens = async () => {
      const access_token = localStorage.getItem('access_token');
      const refresh_token = localStorage.getItem('refresh_token');
      if(access_token && refresh_token){
        console.log("Tokens found!")
        const expired = checkExpirationOfToken(access_token);
        console.log(expired);
        if(expired){
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
        } else {
          const response = await API.refreshToken(refresh_token);
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          dispatch(setUser({
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            username: response.data.username,
            role: response.data.role,
            accesstoken: response.data.access_token,
            refreshtoken: response.data.refresh_token
          }));
        }
      } else {
        console.log("No token found")
      }
    }
    fetchMovies();
    checkTokens();
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
