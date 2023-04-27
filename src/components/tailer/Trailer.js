import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import MovieAPI from '../../api/MovieApi';
import { useEffect, useState } from 'react';

const Trailer = () => {

    let params = useParams();
    let id = params.id;
    const  [key, setKey] = useState("");

    useEffect(()=>{
        const fetchMovieTrailers = async () => {
            const response = await MovieAPI.fetchMovie(id);
            for(let i = 0; i< response.length; i++){
                if(response[i].name === "Official Trailer"){
                    setKey(response[i].key)
                }
            }
        }
        fetchMovieTrailers();
    },[])

    return(
        //set the video into a nice ui with ability to navigate back
        <div>
            <div className='react-player-container'>
                {
                    key && <ReactPlayer 
                        controls={true} 
                        playing={true}
                        url={`https://www.youtube.com/watch?v=${key}`}
                        width='100%' 
                        height='100%'
                        />
                }
            </div>
        </div>
    )
}

export default Trailer;