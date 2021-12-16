import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import Banner from './Banner/Banner';
import Breakfast from './Items/Breakfast/Breakfast';
import Dinner from './Items/Dinner/Dinner';
import Launch from './Items/Launch/Launch';
import Other from './Items/Others/Others';
import JoinTeam from './JoinTeam/JoinTeam';
import Navigation from './Navigation/Navigation';
import './Home.css'

const Home = () => {
    const {user}=useAuth();
    return (
        <div className="home-bg">
            <Navigation></Navigation>
            <Banner></Banner>
           
            {
              user?.email && <marquee> <h1 className="text-primary fs-1 mt-5 fw-bolder"> WELCOME {user?.email}</h1> </marquee>
            }
            <Breakfast></Breakfast>
            <Launch></Launch>
            <Dinner></Dinner>
            <Other></Other>
            <JoinTeam></JoinTeam>
         
           
        </div>
    );
};

export default Home;