import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import './ManageOrder.css';
import DashBoardNav from '../DashBoardNav/DashBoardNav';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';



const ManageOrder = () => {
    const[foods,setFoods]=useState([]);
    const {user}=useAuth();
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://pacific-journey-19792.herokuapp.com/allOrder')
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
       <div className="manageOrder-bg">
           <DashBoardNav/>

            <Container id="breakfast" className="mt-5 pb-5 main-box">
            { isLoading &&  <Spinner animation="border" variant="primary" />}
            <h1 className="text-center py-3 fw-bolder text-white fs-1 main-box">MANAGE ALL FOODS ORDER</h1>
            
           <div className="row mt-5 ">
               {
                   foods?.map(food =><div key={food?._id} food={food} className="col col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={food?.image}  />
                            <Card.Body>
                                <Card.Title className="fw-bolder text-black">{food?.title}</Card.Title>
                                <Card.Text className="text-primary fw-bolder">
                                    {user?.email}
                                </Card.Text>
                                <Card.Text className='fs-5 text-black'>
                                    Price: <span className='text-danger fw-bolder fs-4'>Tk   {food?.price}</span>
                                </Card.Text>
                                <Card.Text className=' text-black fw-bolder'>
                                  Status: <span className='text-primary  fw-bolder'>{food?.status}</span>
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