import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import API from '../../api/Api';
import MovieAPI from '../../api/MovieApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentMovie, setCurrentMovie } from '../../redux/MovieSlice';
import { imagePath } from '../../app/Helper';

const Reviews = () => {



    let params = useParams();
    const dispatch = useDispatch();
    const revText = useRef();
    const movieId = params.movieId;
    const [movie, setMovie] = useState();

    useEffect(()=>{
        const fetchCurrentMovie = async () => {
            const response = await MovieAPI.fetchMovie(movieId);
            console.log("Response")
            console.log(response);
            setMovie(response);
            // dispatch(setCurrentMovie({currentMovie: response.data}))
        }
        fetchCurrentMovie();
    },[])

    const addReview = async () => {
        const response = await API.postReview(revText.current.value, movieId);
        const updatedReviews = [response, ...reviews];
        setReviews(updatedReviews);
        revText.current.value="";
    }

    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" defaultValue="I thought this movie was..."/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {/* {
                        reviews?.map((review, index)=>{
                            return(
                                <div key={review.id.timestamp + index}>
                                    <Row>
                                        <Col>{review.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })
                    } */}
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;