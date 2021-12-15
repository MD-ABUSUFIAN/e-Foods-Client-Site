import React from 'react';
import Banner from './Banner/Banner';
import Breakfast from './Items/Breakfast/Breakfast';
import Dinner from './Items/Dinner/Dinner';
import Launch from './Items/Launch/Launch';
import Other from './Items/Others/Others';
import JoinTeam from './JoinTeam/JoinTeam';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Breakfast></Breakfast>
            <Launch></Launch>
            <Dinner></Dinner>
            <Other></Other>
            <JoinTeam></JoinTeam>
         
           
        </div>
    );
};

export default Home;