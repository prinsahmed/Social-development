import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';

const NavBar = () => {

    
    const navigate =useNavigate();

    const user = 'sfj'
    function handleSignOut() {
        signningOut()
            .then(() => navigate('/'));
    }




    return (
        <div className=" lg:flex justify-between items-center  absolute  w-full z-50  backdrop-blur-[1px] ">
            <div className='flex  justify-between items-center pl-3'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-gradient-to-b from-[#1E1E1E] via-[#3B2F2F] to-[#0F0A0A]  shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/games'>Events</NavLink></li>
                        <li><NavLink to='/my-profile'>Profile</NavLink></li>
                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='md:btn my-1 hover:text-red-700 cursor-pointer text-left mx-3'>Log Out</button>

                                </>
                                :
                                <>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/register'>Register</NavLink></li>
                                </>

                        }
                    </ul>
                </div>
                <Link to='/'>Social</Link>
            </div>




            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu navi text-white menu-horizontal px-1">
                        <li ><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/games'>Events</NavLink></li>
                        <li><NavLink to='/my-profile'>Profile</NavLink></li>
                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='btn mx-3'>Log Out</button>
                                    <li>
                                        <Link to='/my-profile'><img className='w-8 h-8 rounded-full ' src={user?.photoURL} alt='avatar image' /></Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/register'>Register</NavLink></li>
                                </>

                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;