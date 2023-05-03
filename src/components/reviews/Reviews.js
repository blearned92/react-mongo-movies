import {useEffect, useRef, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import API from '../../api/Api';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/UserSlice';
import "./Review.css";
import { roundDate } from '../../app/Helper';
import { Link } from 'react-router-dom';

const Reviews = ({imdb_id}) => {

    const reviewText = useRef();
    const [reviews, setReviews] = useState([]);
    const user = useSelector(selectUser);

    useEffect(()=>{
        const fetchReviews = async () => {
            const response = await API.fetchMovieReviews(imdb_id);
            setReviews(response.reverse());
        }
        fetchReviews();   
    },[])

    const addReview = async () => {
        const response = await API.postReview(
            reviewText.current.value, 
            imdb_id, 
            user.username, 
            user.accesstoken
        );
        if(Object.keys(response.data).length === 0){
            reviewText.current.value="";
        } else {
            const updatedReviews = [response.data, ...reviews];
            setReviews(updatedReviews);
            reviewText.current.value="";
        }
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h2 className='reviews-title'>Reviews</h2>
                </Col>
            </Row>
            <Row className='mt-2' id='reviews'>
                <Col>
                    { user.username ?
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} reviewText={reviewText} labelText = "Write a Review?" defaultValue="I thought this movie was..."/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row> 
                        </> :
                        <div className='review-login-requirement-container'>
                            <Link className="login-nav-link" to="/signin">Login to leave a review!</Link>
                        </div>                    
                    }
                    {
                        reviews.length !== 0 ? reviews?.map((review, index)=>{
                            return(
                                <div key={review.id.timestamp + index} className='review-container'>
                                    <Row>
                                        <Col>
                                            <span className='review-heading'>
                                                Posted by: <b>{review.originalPoster}</b> on {roundDate(review.timestamp)}
                                            </span>
                                            <p className='review-body'>
                                                {review.body}
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }) :
                        <p className='review-container'>Be the first to write a write a review!</p>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;