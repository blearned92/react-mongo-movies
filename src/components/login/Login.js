import {Form, Button } from 'react-bootstrap';
import API from '../../api/Api';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Login.css";
import { setToken, setUser } from '../../redux/UserSlice';


const Login = () => {

    const username = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    const handleSubmit = async () => {
        const response = await API.authenticate(username.current.value, password.current.value, dispatch);        
        if(response){
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
            console.log("Logging in as " + response.data.username)

            navigate("/")
        } else {
            setLoginError("Invalid Credentials")
        }
    }

    return(
        <div className='login-container'>
            <h1>Sign In</h1>
            {loginError && <p style={{"color":"gold"}}>{loginError}</p>}
            <Form className='login-form'>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        ref={username} 
                        as="input" 
                        rows={1} 
                        placeholder={"Username..."}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        ref={password} 
                        as="input" 
                        rows={1} 
                        placeholder={"Password..."}/>
                </Form.Group>
                <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
            </Form>
            <div className='sign-up-container'>
                Don't have an account? 
                <NavLink className="signup-nav-link" to="/register">Sign up</NavLink>
            </div>
        </div>
    )
}

export default Login;