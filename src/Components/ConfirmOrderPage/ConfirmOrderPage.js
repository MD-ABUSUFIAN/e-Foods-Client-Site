import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';

const ConfirmOrderPage = () => {
    const {detailsFood}=useParams();
    const[orders,setOrders]=useState([]);
    const { register, handleSubmit } = useForm();
    const [isLoading,setIsLoading] =useState(false);
 const onSubmit = data => {
     data.status="Pending";
     setIsLoading(true);
     fetch('https://pacific-journey-19792.herokuapp.com/confirmOrder',{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     }).then(res=>res.json())
      .then(data=>{
          if(data.insertedId=true){
           swal("Product Add Successfully", "Please Reload Page", "success");
             
          }
      })
      setIsLoading(false)
   console.log(data)
 };

    return (
        <div>
            <h1>This is Confirm Order Page</h1>
            <div className="row mt-5 ">
                <div className="col-= col-lg-6 col-md-6 col-sm-12 col-12">
                    
                </div>
                <div className="col-= col-lg-6 col-md-6 col-sm-12 col-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                        
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
        </div>
    );
};

export default ConfirmOrderPage;