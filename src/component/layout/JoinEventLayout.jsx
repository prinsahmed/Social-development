import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';
import Footer from '../common/Footer';

const JoinEventLayout = () => {
    return (
        <div className=' min-h-screen'>
                <NavBar />
            <div className='max-w-10/12 mx-auto'>

                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default JoinEventLayout;