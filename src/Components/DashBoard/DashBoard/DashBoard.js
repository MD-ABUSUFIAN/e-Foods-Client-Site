import React from 'react';

import { Outlet } from 'react-router-dom';
import DashBoardNav from '../DashBoardNav/DashBoardNav';


const DashBoard = () => {
    
    return (
        <>
            <DashBoardNav></DashBoardNav>
            <Outlet></Outlet>
    
        </>
    );
};

export default DashBoard;