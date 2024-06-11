import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
                <main>
                <Outlet/>
                </main>
            <Footer/>
        </>
    );
};

export default Layout;