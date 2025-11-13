import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase';
import { Context } from '../../context/AuthContext';
import ThemeSwitcher from './ThemeSwitcher';


const NavBar = () => {
    const [profile, setProfile] = useState(false);
    const { user } = useContext(Context);


    const dropDown = <ul className='absolute top-12 -right-1 p-0 rounded-sm  w-[150px] bg-gray-600 '>
        <li><NavLink to='/create-event'>Create Event</NavLink></li>
        <li><NavLink to='/manage-event'>Manage Events</NavLink></li>
        <li><NavLink to='/join-event' >Joined Events</NavLink></li>
    </ul>

    const navigate = useNavigate();


    function handleSignOut() {
        signOut(auth)
            .then(() => navigate('/'));
    }




    return (
        <div className=" lg:flex justify-between items-center bg-gradient-to-r from-[#dc6b2e] via-[#F97316] to-[#c99660]">
            <div className='flex  justify-between items-center pl-3'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2  bg-gray-600   shadow">
                            <ThemeSwitcher/>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/up-event' >Events</NavLink></li>

                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='md:btn my-1 hover:text-red-700 cursor-pointer text-left mx-3'>Log Out</button>
                                    <li className='relative' onClick={() => setProfile(!profile)}>
                                        <img className='w-8 h-8 p-0 rounded-full ' src={user?.photoURL} alt='avatar image' />
                                        {
                                            profile && dropDown
                                        }
                                    </li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/auth/login'>Login</NavLink></li>
                                    <li><NavLink to='/auth/register'>Register</NavLink></li>
                                </>

                        }
                    </ul>
                    
                </div>
                
                <Link className='text-lg text-white font-semibold' to='/'>BrightPath</Link>
            </div>




            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu navi text-white menu-horizontal px-1">
                        <ThemeSwitcher/>
                        <li ><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/up-event' >Events</NavLink></li>

                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='btn mx-3'>Log Out</button>
                                    <li className='relative' onClick={() => setProfile(!profile)}>
                                        <img className='w-10 h-10 p-0 rounded-full ' src={user?.photoURL} alt='avatar image' />
                                        {
                                            profile && dropDown
                                        }
                                    </li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/auth/login'>Login</NavLink></li>
                                    <li><NavLink to='/auth/register'>Register</NavLink></li>
                                </>

                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;