import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



const Login = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="login-bg">
        
            <div className="w-75 d-flex pt-4">
              
                <div className="ms-5 ps-5  mt-5 w-75" >
               
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center fs-1 fw-bolder text-white mt-5">Please Login</h1>
                    
                    <label className="text-warning fs-5 fw-bold">Email</label>
                    <input className="w-100 py-3 mb-1 border-0 rounded" {...register("email")} type="email" placeholder="Write Your Email"  />
                    <label className="text-warning fs-5 fw-bold">Password</label>
                    <input className="w-100 py-3 mb-2 border-0 rounded" type="password" {...register("password")} placeholder="Write Your Password"  />
                    
                    <input className="w-100 fs-5 py-2 mb-2 border-0 rounded bg-primary text-white fw-bolder" type="submit" value="Login" />
                    </form>
                   <br />
                    <span className="text-white fs-5 fw-bolder">NEW USER ? Please  <Link className="fw-bolder fs-4" to="/register">Register</Link></span>
                </div>
               
            </div>
        </div>
    );
};

export default Login;