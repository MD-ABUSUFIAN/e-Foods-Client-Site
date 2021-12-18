import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';
import DashBoardNav from '../DashBoardNav/DashBoardNav';
import './MyOrder.css';



    const ManageOrder = () => {
    const[foods,setFoods]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const {user} =useAuth();

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://pacific-journey-19792.herokuapp.com/myOrders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setFoods(data)
        })
        setIsLoading(false)
       
    },[isLoading])
    

    const handleDelete=id=>{
        setIsLoading(true)
        fetch(`https://pacific-journey-19792.herokuapp.com/manageOrder/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            swal("Are You Sure!", "Delete This Order!", "warning");
            setIsLoading(false)
            console.log(data)
        })
     
         
    }
    
    return (
       
       <div className="myOrder-bg pb-5">
           <DashBoardNav/>
          

            <Container id="breakfast" className="mt-5 mb-5  main-box">
           
            <h1 className="text-center py-3 fw-bolder text-white fs-1 main-box">MANAGE MY FOODS ORDER</h1>
            {isLoading &&  <Spinner animation="border" variant="primary" />}
           <div className="row mt-3  ">
               {
                   foods?.map(food =><div key={food?._id} food={food} className="col col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={food?.image}  />
                            <Card.Body>
                                <Card.Title className="fw-bolder text-black">{food?.title}</Card.Title>
                                <Card.Text>
                                    {food?.description.slice(0,70)}
                                </Card.Text>
                                <Card.Text className='fs-5 text-black'>
                                    Price: <span className='text-danger fw-bolder fs-4'>${food?.price}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                             
                            <button onClick={()=>handleDelete(food?._id)} className="btn btn-danger fw-bold">DELETE</button>
                          
                            </Card.Footer>
                         </Card>

                    </CardGroup>
                   </div>
                    
                   )
               }

           </div>
        </Container>
   
       </div>
    );
};

export default ManageOrder;