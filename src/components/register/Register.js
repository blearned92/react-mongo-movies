import {Form, Button } from 'react-bootstrap';
import API from '../../api/Api';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Register.css";
import RegisterModal from './RegisterModal';

const Register = () => {

    // const firstName = useRef("");
    // const lastName = useRef("");
    // const username = useRef(""); 
    // const password = useRef("");
    // const exactPassword = useRef("");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [passwordMatchError, setPassMatchError] = useState("Please enter a valid password");

    const [form, setForm] = useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        confirmPassword:""
    });
    const [errors, setErrors] = useState({});
    const [registerModal, setRegisterModal] = useState(false);

    const setField = async (field, value) => {

        setForm({
            ...form,
            [field]:value
        })

        if(!!errors[field]){
            setErrors({
                ...errors,
                [field]:null
            })
        }
    }

    const validateForm = async () => {
        const {firstname, lastname, username, password, confirmPassword} = form;
        const newErrors = {};

        if(!firstname)
            newErrors.firstname = "Please enter a first name"
        else if(firstname.length > 40) 
            newErrors.firstname = "First name cannot exceed 40 characters"
        if(!lastname)
            newErrors.lastname = "Please enter a last name"
        else if(lastname.length > 40) 
            newErrors.lastname = "Last name cannot exceed 40 characters"
            //verify that username is not already take
        if(!username)
            newErrors.username = "Please enter a username"
        else if(username.length < 8 || username.length > 20) 
            newErrors.username = "Username must be between 8 & 20 characters long"
        else if(await API.checkUsernameTaken(username))
            newErrors.username = "Username is already taken"
       // make sure password is in a certain format
        if(!password)
            newErrors.password = "Please enter a password"
        else if(password.length < 8 || password.length > 30) 
            newErrors.password = "Password must be between 8 & 30 characters long"
        else if (!CheckPassword(password)){
            newErrors.password = "Password must contain one lowercase, one uppercase, and one special character"
        }
        if(!confirmPassword)
            newErrors.confirmPassword = "Please confirm your password"
        else if(confirmPassword !== password)
            newErrors.confirmPassword = "Passwords must match" 

        return newErrors;
    }

    const CheckPassword = (inputtxt) => { 
        const check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        if(inputtxt.match(check)) { 
            return true;
        } else { 
            return false;
        }
    }


    const handleSubmit = async e => {
        e.preventDefault();

        const formErrors = await validateForm();

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors);
        } else {
            setRegisterModal(true);
        }
    }

    return(
        <div className='register-container'>
            <h1>Register</h1>
            <Form noValidate validated={false} onSubmit={handleSubmit} className='register-form'>
                <Form.Group className="mb-2" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        required
                        // ref={firstName} 
                        as="input" 
                        rows={1} 
                        type='input'
                        placeholder="First name..."
                        value={form.firstname}
                        onChange={e=> setField('firstname', e.target.value)}
                        isInvalid={!!errors.firstname}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.firstname}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        required
                        // ref={lastName} 
                        as="input" 
                        rows={1} 
                        type="input"
                        placeholder={"Last name..."}
                        value={form.lastname}
                        onChange={e=> setField('lastname', e.target.value)}
                        isInvalid={!!errors.lastname}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.lastname}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        required
                        // ref={username} 
                        as="input" 
                        rows={1} 
                        placeholder={"Username..."}
                        value={form.username}
                        onChange={e=> setField('username', e.target.value)}
                        isInvalid={!!errors.username}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        // ref={password} 
                        as="input" 
                        rows={1} 
                        placeholder={"Password..."}
                        value={form.password}
                        onChange={e=> setField('password', e.target.value)}
                        isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="exact-password">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        // ref={exactPassword} 
                        as="input" 
                        rows={1} 
                        placeholder={"Re-enter Password..."}
                        value={form.confirmPassword}
                        onChange={e=> setField('confirmPassword', e.target.value)}
                        isInvalid={!!errors.confirmPassword}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type='submit' variant='outline-info'>Register</Button>
            </Form>

            {registerModal && <RegisterModal 
                form={form} 
                setRegisterModal={setRegisterModal}
                setForm={setForm}/>}
        </div>
    )
}

export default Register;