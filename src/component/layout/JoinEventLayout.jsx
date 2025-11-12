import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';

const JoinEventLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default JoinEventLayout;