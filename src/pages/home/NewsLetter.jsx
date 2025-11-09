import { ArrowRight } from 'lucide';
import React from 'react';

const NewsLetter = () => {

    return (
        <div className='py-36'>
            <div className="max-w-6xl mx-auto  md:p-10 bg-white rounded-xl shadow-lg ">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
                    Subscribe Our Newsletter
                </h2>
                <form className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full md:w-auto flex-grow p-3 border border-gray-300 rounded-lg text-base 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     placeholder:text-gray-500"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full md:w-auto flex-grow p-3 border border-gray-300 rounded-lg text-base 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     placeholder:text-gray-500"
                    />
                    <button

                        className="w-full md:w-40 py-3 px-6 bg-sky-500 text-white font-semibold 
                     rounded-lg shadow-md hover:bg-sky-600 transition duration-150 ease-in-out 
                     flex-shrink-0"
                    >
                        Subscribe
                    </button>
                </form>
                <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                    <input
                        type="checkbox"
                        id="terms-tailwind"
                        className="h-4 w-4 text-sky-500 border-gray-300 rounded focus:ring-sky-500 mr-2"
                    />
                    <label htmlFor="terms-tailwind">
                        I agree to the <span className="underline cursor-pointer text-sky-600">terms and conditions.</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;