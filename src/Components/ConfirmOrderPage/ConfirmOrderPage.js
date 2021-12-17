import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { set } from 'react-hook-form/dist/index.cjs';
import { useParams } from 'react-router';
import './ConfirmOrder.css';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation'

const ConfirmOrderPage = () => {
    const {user}=useAuth();
    const {detailsFood}=useParams();
    const[orders,setOrders]=useState([]);
    const { register, handleSubmit,reset,setValue } = useForm();
    const [isLoading,setIsLoading] =useState(true);

   useEffect(()=>{
        setIsLoading(true)
        fetch('https://pacific-journey-19792.herokuapp.com/foodsItem')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            setIsLoading(false)
        })
       
       
   },[])
  
  
   const foods=orders.filter(order=>order?._id==detailsFood)

  
 



     const onSubmit = data => {
     data.status="Pending";
     fetch('https://pacific-journey-19792.herokuapp.com/confirmOrder',{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     }).then(res=>res.json())
      .then(data=>{
        
          if(data.insertedId){
            console.log(data)
           swal("Your Order Successfully", "Please Check Your DashBoard My Order List", "success");
                reset()
             
          }
       
      })
      console.log(data)
      
  
 };

    return (
        <div className="confirmOrder-bg">
            <Navigation></Navigation>
          
            <h1>This is Confirm Order Page</h1>
            { isLoading && <Spinner animation="border" variant="primary" />}
            <Container className="row  me-3 pb-5 ">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pt-4 ">
                <Card>
                    <Card.Img variant="top" src={foods[0]?.image} />
                    <Card.Body>
                        <Card.Title>{foods[0]?.title}</Card.Title>
                            <Card.Text >
                           {foods[0]?.description}
                            </Card.Text>
                            <Card.Text className="fs-5 fw-bold">
                           Price: {foods[0]?.price}Tk
                            </Card.Text>
                    </Card.Body>
                </Card>
                    
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12 ">
           
            <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <label className="fw-bold fs-5 text-info">Your Email:</label>
                    <input className="w-100 py-2  " {...register("email",{ required: true }) }  defaultValue={user?.email} required  />
                    <br/>
                    <label className="fw-bold fs-5 text-info">Product Name:</label>
                    <input className="w-100 py-2  " {...register("title",{ required: true })} defaultValue={foods[0]?.title} required  />
                    <br/>
                    <label className="fw-bold fs-5 text-info">Image URL:</label>
                    <input className="w-100 py-2  "   {...register("image",{ required: true })} 
                    defaultValue={foods[0]?.image} required type="text" />
                    <br/>
                    <label className="fw-bold fs-5 text-info">Description:</label>
                    <textarea className="w-100 py-2  " {...register("description",{ required: true }) } type="text" defaultValue={foods[0]?.description} required />
                    <br/>
                   
                    <label className="fw-bold fs-5 text-info">Product Price:</label>
                    <input className="w-100 py-2 " {...register("price",{ required: true })} type="number" defaultValue ={foods[0]?.price} required  />
                    <br/>
                    <label className="fw-bold fs-5 text-info">Phone Number:</label>
                    <input className="w-100 py-2 " {...register("phone",{ required: true })} type="number" placeholder="Plz Write Your Phone Number" required />
                    <br/>
                    
                    <label className="fw-bold fs-5 text-info">Select Delivery:</label>
                    <select className="w-100 py-2 fw-bold  " {...register("delivery",{ required: true })}>
                        <option className="fw-bold bg-danger" value="Regular">Regular Delivery</option>
                        <option className="fw-bold bg-warning" value="Express">Express Delivery</option>
                    </select>
                    <br/>
                    <input className="btn btn-primary text-white fw-bolder" type="submit" value="AddProduct" />
                    
                </form>
     
            </div>
            
            </div>
                
            </Container>
           
        </div>
    );
};

export default ConfirmOrderPage;