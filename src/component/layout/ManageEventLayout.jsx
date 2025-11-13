import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';
import Footer from '../common/Footer';

const ManageEventLayout = () => {
    return (
        <div className='min-h-dvh'>
                <NavBar />
            <div className='max-w-10/12 mx-auto min-h-dvh'>
            <title>Manage Event</title>
                <Outlet />

            </div>
            <Footer/>
        </div>
    );

};

export default ManageEventLayout;