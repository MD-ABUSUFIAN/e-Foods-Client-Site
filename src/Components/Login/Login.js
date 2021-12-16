import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link,useLocation,useNavigate} from 'react-router-dom';

import swal from 'sweetalert'
import useAuth from '../../Hooks/useAuth';



const Login = () => {
      const {googleLogin,user,emailLogin,}=useAuth();
      const { register, handleSubmit } = useForm();
      const location=useLocation();
      const navigate=useNavigate();
      const onSubmit = data => {
        swal("Successfully Login!", "Please Go Home", "success");
      emailLogin(data.email,data.password,location,navigate)
   
      console.log(user.email)
    // console.log(data)
  };

  const handleGoogleLogin=()=>{
    googleLogin(location,navigate)
  }

    return (
        <div className="login-bg">
        
            <div className="w-75 d-flex pt-4">
              
                <div className="ms-5 ps-5  mt-3 w-75" >
               
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
                    <br />
                    <p className="text-center text-warning fs-4 fw-bolder ">----------------or----------------</p>
                    <button className="w-25 mx-auto rounded-pill d-flex" onClick={handleGoogleLogin}><img className=" img-fluid rounded-pill w-50 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd7suBeSboSHtNORMJI8iL7z6u9IWZDlKN6ANICo20DPGZ8psvwPJdZ3NRR6O6CAn8i4&usqp=CAU" alt="" /></button>
                </div>
               
            </div>
        </div>
    );
};

export default Login;