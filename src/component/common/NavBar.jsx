import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase';
import { Context } from '../../context/AuthContext';

const NavBar = () => {
    const [profile, setProfile] = useState(false);
    const { user } = useContext(Context);


    const dropDown = <ul className='absolute top-12 -right-1 p-0 rounded-sm  w-[150px] bg-gradient-to-b from-rose-100 via-amber-100 to-amber-50 text-gray-800 '>
        <li><Link to='/create-event'>Create Event</Link></li>
        <li><Link to='/manage-event'>Manage Events</Link></li>
        <li><Link to='/join-event' >Joined Events</Link></li>
    </ul>

    const navigate = useNavigate();


    function handleSignOut() {
        signOut(auth)
            .then(() => navigate('/'));
    }




    return (
        <div className=" lg:flex justify-between items-center bg-black ">
            <div className='flex  justify-between items-center pl-3'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-gradient-to-b from-[#1E1E1E] via-[#3B2F2F] to-[#0F0A0A]  shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/up-event' >Events</NavLink></li>
                        
                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='md:btn my-1 hover:text-red-700 cursor-pointer text-left mx-3'>Log Out</button>

                                </>
                                :
                                <>
                                    <li><NavLink to='/auth/login'>Login</NavLink></li>
                                    <li><NavLink to='/auth/register'>Register</NavLink></li>
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
                        <li><NavLink to='/up-event' >Events</NavLink></li>
                        
                        {
                            user ?
                                <>

                                    <button onClick={handleSignOut} className='btn mx-3'>Log Out</button>
                                    <li className='relative' onClick={() => setProfile(!profile)}>
                                        <img className='w-8 h-8 rounded-full ' src={user?.photoURL} alt='avatar image' />
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