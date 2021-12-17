import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink  } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../Images/logo.png'

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
        <>


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand  href="#home"><img className="image-fluid w-75" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className=' me-1 fw-bolder text-white border rounded  fs-5 ' href="/home">Home</Nav.Link>
                    <Nav.Link className=' me-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#breakfast">Breakfast</Nav.Link>
                    <Nav.Link className=' me-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#launch">Launch</Nav.Link>
                    <Nav.Link className=' me-1 fw-bolder text-white border rounded fs-5 ' href="/home/#dinner">Dinner</Nav.Link>
                    <Nav.Link className=' me-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#varities">Varities </Nav.Link>   
                </Nav>
                    <Nav className='ms-auto fs-5'>
                    
                        {
                            ! user?.email ? <NavLink className='me-auto fs-5 '  to="/login"><button className="rounded  fw-bold px-3 p-2">Login</button></NavLink>
                            : 
                            <>
                            <NavLink className=' fs-5 pt-2'  to="/dashboard">
                                <button className="rounded  fw-bold p-2">DashBoard</button>
                            </NavLink>
                            <Nav.Link className=' fs-5' >
                                <button className="rounded  fw-bold p-2" onClick={logOut}>Logout</button>
                            </Nav.Link>
                            
                            <br /></>
                        }
                       
                    </Nav>
              </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    );
};

export default Navigation;