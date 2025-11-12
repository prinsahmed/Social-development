import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { Context } from '../../context/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../firebase/firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState();
    const [passEye, setPassEye] = useState(false);
    const { createEmail } = useContext(Context);
    const googleProvider = new GoogleAuthProvider;



    function handleSignInEmail(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;
        const pass = e.target.pass.value;
        const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const passCheck = pattern.test(pass);


        if (!passCheck) {
            setError(true)
            return;
        }

        setError('');
        createEmail(email, pass, name, photoURL)
            .then(res => {
                if (res) {
                    Swal.fire({
                        title: "Successfully Registered",
                        text: `Welcome ${res.displayName}`,
                        icon: "success",
                        confirmButtonText: "OK",
                    });

                }
            })

        e.target.reset()

    }

    function handleSignInGoogle() {
        signInWithPopup(auth, googleProvider)

    }





    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-amber-100 to-amber-50 px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSignInEmail} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Your full name"
                            name='name'
                            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="example@mail.com"
                            name='email'
                            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                        />
                    </div>

                    <div className='relative'>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={
                                passEye ? 'text' : 'password'
                            }
                            placeholder="Enter password"
                            name='pass'
                            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                        />

                        <div onClick={() => setPassEye(!passEye)} className='absolute right-4 top-9 cursor-pointer'>
                            {
                                passEye ? <FaEye /> : <FaEyeSlash />
                            }
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="https://your-photo-link.com"
                            name='photo'
                            required
                            className="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                        />
                    </div>
                    <div>
                        {
                            error && <span className='text-red-600 text-xs'>Password must have an Uppercase
                                letter, a Lowercase letter and length must be at least 6 character</span>
                        }
                    </div>

                    <div onClick={handleSignInGoogle} className=' btn text-center w-full'>
                        <span>Sign in with</span>
                        <span className='text-3xl'>< FcGoogle /></span>
                    </div>
                    <button

                        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-xl shadow-md transition-all"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-amber-500 hover:underline font-medium"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;