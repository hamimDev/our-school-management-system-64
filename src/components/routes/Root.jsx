import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ResponsiveNavbar from '../Header/Header';

const Root = () => {
    return (
        <div>
            <ResponsiveNavbar></ResponsiveNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;