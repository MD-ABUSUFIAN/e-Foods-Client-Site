import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashBoardNav from '../DashBoardNav/DashBoardNav';
// import useAuth from '../../../Hooks/useAuth';
// import DashBoardNav from '../DashBoardNav/DashBoardNav';
import './Review.css'

const Review = () => {
    const { register, handleSubmit } = useForm();
     const [isLoading,setIsLoading] =useState(false);
  const onSubmit = data => {
      setIsLoading(true);
      fetch('http://localhost:5000/foodsItem',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(res=>res.json())
       .then(data=>{
           if(data?.insertedId){
                alert("Product Add Successfully")
           }
       })
       setIsLoading(false)
    console.log(data)
  };
    return (
        <div className="review-bg" >
            <DashBoardNav/>
           
            <div className=" w-100 "  >
                {isLoading && <Spinner animation="border" variant="primary" />}
                 
               
                <h1 className="review-title">REVIEW</h1>
                
                        <form className="w-50 mx-auto "  onSubmit={handleSubmit(onSubmit)}>
                        
                         <label className="fw-bold fs-5 text-info">Product Name:</label>
                         <input className="w-100 py-2  " {...register("title")} type="text" placeholder="Write Your Product Name" />
                         <br/>
                         <label className="fw-bold fs-5 text-info">Image URL:</label>
                         <input className="w-100 py-2  "   {...register("image")} type="text"
                         placeholder="Write Your Product Image URL" />
                         <br/>
                         <label className="fw-bold fs-5 text-info">Description:</label>
                         <textarea className="w-100 py-2  " {...register("description")} type="text" placeholder="Write Your Product Description" />
                         <br/>
                         <label className="fw-bold fs-5 text-info">Product Price:</label>
                         <input className="w-100 py-2 " {...register("price")} type="number" placeholder="Write Your Product Price"/>
                         <br/>
                         <label className="fw-bold fs-5 text-info">Select Menu Item:</label>
                         <select className="w-100 py-2 fw-bold  " {...register("item")}>
                             <option className="fw-bold bg-danger" value="breakFast">Breakfast</option>
                             <option className="fw-bold bg-warning" value="launch">Launch</option>
                             <option className="fw-bold bg-info" value="dinner">Dinner</option>
                             <option className="fw-bold bg-secondary" value="other">Other</option>
                         </select>
                         <br/>
                         <input className="btn btn-primary text-white fw-bolder" type="submit" value="AddProduct" />
                     </form>
                    
                
               
            </div>
        </div>
    );
};

export default Review;