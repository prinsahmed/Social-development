import React from 'react';
import NavBar from '../common/NavBar';
import { Outlet } from 'react-router';

const RegisterLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet/>
        </>
    );
};

export default RegisterLayout;