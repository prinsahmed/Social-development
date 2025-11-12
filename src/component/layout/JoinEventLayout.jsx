import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';
import Footer from '../common/Footer';

const JoinEventLayout = () => {
    return (
        <div className='bg-gradient-to-br from-rose-100 via-amber-100 to-amber-50 min-h-screen'>
                <NavBar />
            <div className='max-w-10/12 mx-auto'>

                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default JoinEventLayout;