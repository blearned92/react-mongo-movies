import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../redux/UserSlice";
import "./header.css";

const Header = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigateHome = () => {
        navigate("/");
    }

    const handleNavigateWatchList = () => {
        navigate("/watchlist");
    }

    const handleNavigateSignin = () => {
        navigate("/signin")
    }

    const handleNavigateRegister = () => {
        navigate("/register")
    }

    const handleLogOut = () => {
        dispatch(setUser({
            firstname: null,
            lastname: null,
            username:null,
            role: null
        }))
        navigate("/signin")
    }

    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container fluid>
            <Navbar.Brand onClick={handleNavigateHome} className="navbar-title" style={{"color":'gold'}}>
                <FontAwesomeIcon icon = {faVideoSlash}/>
                Mango Movies
                
            </Navbar.Brand>
            <div className="navbar-toggle-container">
                {user.username && <div className="username on-toggle">{user.username}</div>}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="nav-link" href="#" onClick={handleNavigateHome}>Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#" onClick={handleNavigateWatchList}>Watch List</Nav.Link>
                </Nav>
                {user.username && <div className="username off-toggle">{user.username}</div>}
                <Nav>
                {user.username ? 
                    <>
                        <Nav.Link className="nav-link" href="#">
                            <Button variant="outline-info" onClick={handleLogOut}>Log Out</Button> 
                        </Nav.Link>
                    </> :
                    <>
                        <Nav.Link className="nav-link" href="#">
                            <Button variant="outline-info" onClick={handleNavigateSignin} className="me-2">Login</Button>
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#">
                            <Button variant="outline-info" onClick={handleNavigateRegister} className="me-2">Register</Button>
                        </Nav.Link>
                    </>
                }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;