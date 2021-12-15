import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink  } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Navigation = () => {
    return (
        <>


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home"><img className="w-75" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className=' mx-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#breakfast">Breakfast</Nav.Link>
                    <Nav.Link className=' mx-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#launch">Launch</Nav.Link>
                    <Nav.Link className=' mx-1 fw-bolder text-white border rounded fs-5 ' href="/home/#dinner">Dinner</Nav.Link>
                    <Nav.Link className=' mx-1 fw-bolder text-white border rounded  fs-5 ' href="/home/#varities">Varities </Nav.Link>   
                </Nav>
                    <Nav className='ms-auto fs-5'>
                        <NavLink className='me-1 fs-5'  to="/login"><button className="rounded  fw-bold px-3 py-1">Login</button></NavLink>
                        {/* <NavLink className='me-1 fs-5'  to="/dashboard"><button className="rounded  fw-bold px-3">DashBoard</button></NavLink>
                        <NavLink className=' fs-5'  to="/logout"><button className="rounded  fw-bold px-3">Logout</button></NavLink> */}
                    </Nav>
              </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    );
};

export default Navigation;