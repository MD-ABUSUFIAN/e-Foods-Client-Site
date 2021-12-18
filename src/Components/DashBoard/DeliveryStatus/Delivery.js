import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Delivery.css';

import swal from 'sweetalert';
import DashBoardNav from '../DashBoardNav/DashBoardNav';



const Delivery = () => {
    const[foods,setFoods]=useState([]);
    const [isLoading,setIsLoading]=useState(true); 
    const { register, handleSubmit,reset} = useForm();

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://pacific-journey-19792.herokuapp.com/allOrder')
        .then(res=>res.json())
        .then(data=>{
          setFoods(data)
         
        })
        setIsLoading(false)
       
    },[isLoading])

    const onSubmit = data => {
       
               console.log(data)
              swal("Order Status Update Successfully", "Please Check Your DashBoard My Order List", "success");
                   reset()
              };
   
    return (
       <div className="delivery-bg">
           <DashBoardNav/>

            <Container id="breakfast" className="mt-5 pb-5 main-box">
            { isLoading &&  <Spinner animation="border" variant="primary" />}
            <h1 className=" py-3 delivery-title main-box">ALL ORDER DELIVERY STATUS UPDATE </h1>
            
           <div className="row mt-5 ">
               {
                   foods?.map(food =><div key={food?._id} food={food} className="col col-lg-3 col-md-4 col-sm-12 col-12 mb-3">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={food?.image}  />
                            <Card.Body>
                                <Card.Title className="fw-bolder text-black">{food?.title}</Card.Title>
                                <Card.Text>
                                    {food?.description.slice(0,100)}
                                </Card.Text>
                                <Card.Text className='fs-5 text-black'>
                                    Price: <span className='text-danger fw-bolder fs-4'>${food?.price}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                             
                          









                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <label className="fw-bold  text-info">Delivery Status:</label>
                    <select className="w-100 py-2 fw-bold  " {...register("status")}>
                        <option className="fw-bold bg-danger" value="Pending">Pending</option>
                        <option className="fw-bold bg-warning" value="Approved">Approved</option>
                    </select>
                    <br/>
                    <input className="btn btn-primary text-white fw-bolder" type="submit" value="Confirm Order" />
                    
                </form>
     

















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

export default Delivery;