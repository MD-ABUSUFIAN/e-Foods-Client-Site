import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'



const Register = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="register-bg">
        
            <div className="w-75 d-flex ">
              
                <div className="ms-5 ps-5  mt-4 w-75" >
               
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center fs-1 fw-bolder text-info mt-5">Please Login</h1>
                    <label className="text-warning fs-5 fw-bold">Name</label>
                    <input className="w-100 py-3 mb-1 border-0 rounded" {...register("displayName")} type="text" placeholder="Write Your Name" />
                    <label className="text-warning fs-5 fw-bold">Email</label>
                    <input className="w-100 py-3 mb-1 border-0 rounded" {...register("email")} type="email" placeholder="Write Your Email"  />
                    <label className="text-warning fs-5 fw-bold">Password</label>
                    <input className="w-100 py-3 mb-1 border-0 rounded" type="password" {...register("password")} placeholder="Write Your Password"  />
                    <label className="text-warning fs-5 fw-bold">Confirm Password</label>
                    <input className="w-100 py-3 mb-2 border-0 rounded" type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
                    <input className="w-100 py-2 fs-5 mb-2 border-0 rounded bg-primary text-white fw-bolder" type="submit" value="Login" />
                    </form>
                   <br />
                    <span className="text-white fs-5 fw-bold">Already Account ? Please <Link className="fw-bolder fs-4 text-danger" to="/login">Login</Link></span>
                </div>
               
            </div>
        </div>
    );
};

export default Register;