import React from 'react';
import Classrooms from '../../ClassroomsAll/Classrooms/Classrooms';
import './Home.css';
import MinAbout from '../../About/minAbout/MinAbout';

const Home = () => {
    return (
        <div className='mt-[123px]'>
            <div className='bg-image h-[788px]'>
             <MinAbout></MinAbout>
            </div>
            <Classrooms></Classrooms>
        </div>
    );
};

export default Home;
