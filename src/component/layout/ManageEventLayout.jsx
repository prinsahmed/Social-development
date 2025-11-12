import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';

const ManageEventLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default ManageEventLayout;