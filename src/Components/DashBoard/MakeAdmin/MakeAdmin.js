import React from 'react';
import { useForm } from 'react-hook-form';
import DashBoardNav from '../DashBoardNav/DashBoardNav';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        console.log(data)
         }
    return (
        <div className="makeAdmin-bg">
            <DashBoardNav/>

            <h1 className="admin-title mt-5">MAKE NEW ADMIN</h1>
                <form className="w-50 mx-auto mt-5 "  onSubmit={handleSubmit(onSubmit)}>
                        
                         <label className="fw-bold fs-4 text-warning">New Admin Email</label>
                         <input className="w-100 py-2  " {...register("role")} type="email" placeholder="Write New Admin Email @.com" />
                        
                         <input className="btn btn-primary w-100 fs-5 mt-1 text-white fw-bolder" type="submit" value="New Admin" />
            </form>
                    
        </div>
    );
};

export default MakeAdmin;