import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import DashBoardNav from '../DashBoardNav/DashBoardNav';

import './Review.css'

const Review = () => {
    const {user}=useAuth();
    const { register, handleSubmit,reset } = useForm();
     const [isLoading,setIsLoading] =useState(false);
  const onSubmit = data => {
      setIsLoading(true);
      fetch('https://pacific-journey-19792.herokuapp.com/customerReview',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(res=>res.json())
       .then(data=>{
           if(data?.insertedId){
            swal("Thank You!", "Your Review is Successfully Added!", "success");
                reset()
           }
       })
       setIsLoading(false)

  };
    return (
        <div className="review-bg" >
            <DashBoardNav/>
           
            <div className=" w-100 pt-3"  >
                {isLoading && <Spinner animation="border" variant="primary" />}
                 
               
                <h1 className="review-title">CUSTOMER REVIEW</h1>
                
                     <form className="w-50 mx-auto "  onSubmit={handleSubmit(onSubmit)}>
                        
                         
                            <input className="w-100 py-2 mb-1 "   {...register("email",{ required: true })} 
                            value={user?.email} required  />
                            <br/>
                            <textarea className="w-100 py-2  " {...register("review",{ required: true }) } type="text" placeholder="Write Your Review" required />
                            <br/>
                            <input className="w-100 py-2  "   {...register("rating",{ min: 1, max: 5 })} type="number" placeholder="Service Rating Out of 5"  required  />
                                <br/>
                            <input className="btn btn-primary w-100 py-2 text-white fw-bolder" type="submit" value="AddProduct" />
                     </form>
                    
                
               
            </div>
        </div>
    );
};

export default Review;