import "./RegisterModal.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import API from "../../api/Api";
import { useNavigate } from "react-router-dom";
import { hiddenPw, properCase } from "../../app/Helper";
import { useDispatch } from "react-redux";


const RegisterModal = (props) => {

    const {firstname, lastname, username, password, confirmPassword} = props.form;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const response = await API.register(props.form, dispatch);
        //maybe set this to only happen if successfully http response
        navigate("/");
    }

    const handleExit = () => {
        props.setForm({
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            confirmPassword:""
        })
        props.setRegisterModal(false);
    }

    return (
        <div className="register-modal-wrapper">
            <h1>Registration Review</h1>
            <p>Does this information look correct?</p>
            <Table className="register-modal-table" bordered>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{properCase(firstname)}</td>
                    </tr>  
                    <tr>
                        <td>Last Name</td>
                        <td>{properCase(lastname)}</td>
                    </tr> 
                    <tr>
                        <td>Username</td>
                        <td>{username.toLowerCase()}</td>
                    </tr>  
                    <tr>
                        <td>Password</td>
                        <td>{hiddenPw(password)}</td>
                    </tr> 
                </tbody>
            </Table>
            <Container className="register-modal-container">
                <Row className='mt-2'>
                    <Button onClick={handleSubmit} variant='outline-info' className="register-modal-submit">
                        Submit
                    </Button>
                </Row>
            </Container>

            <Button 
                variant='outline-info'
                className="register-modal-exit"
                onClick={handleExit}>
                Back
            </Button>
        </div>
    )
}

export default RegisterModal;