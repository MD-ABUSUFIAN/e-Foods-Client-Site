import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink,Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../Images/logo.png';

const DashBoardNav = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand  href="#home"><img className="image-fluid w-75" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           

            { !user?.email ?
            <Nav className="ms-auto">
                    <NavLink className=' fs-5 pt-1 m-1' exact  to="/dashboard/myOrder">
                    <button className="rounded  fw-bold p-2">MyOrder</button>
                    </NavLink>
                    <NavLink className=' fs-5 pt-1 m-1 '  to="/dashboard/payment">
                    <button className="rounded  fw-bold p-2">Payment</button>
                    </NavLink>
                    <NavLink className=' fs-5 pt-1 m-1 '  to="/dashboard/review">
                    <button className="rounded  fw-bold p-2">Review</button>
                    </NavLink>
                  </Nav>   
                 :  <Nav className='ms-auto'>
                            <NavLink className=' fs-5 pt-2'  to="/dashboard/manageOrder">
                                <button className="rounded  fw-bold p-2">ManageOrder</button>
                            </NavLink>
                            <NavLink className=' fs-5 pt-2'  to="/dashboard/deliveryStatus">
                                <button className="rounded  fw-bold p-2">Delivery</button>
                            </NavLink>
                            <NavLink className=' fs-5 pt-2'  to="/dashboard/addProduct">
                                <button className="rounded  fw-bold p-2">Add-Product</button>
                            </NavLink>
                            <NavLink className=' fs-5 pt-2'  to="/dashboard/makeAdmin">
                                <button className="rounded  fw-bold p-2">MakeAdmin</button>
                            </NavLink>
                             <br />
                    </Nav>
              
                  
                        } 
                 <NavLink className=' ms-auto  fs-5 pt-2' to="/" >
            <button className="rounded bg-danger text-white border-0 ms-1  fw-bolder px-3 py-2" onClick={logOut}>Logout</button>
            </NavLink>
            </Navbar.Collapse>
        </Container>
    </Navbar>






    
        </div>
    );
};

export default DashBoardNav;