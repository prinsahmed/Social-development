import React from 'react';

const Feature = () => {
    return (
        <div className='pt-28 '>
            <h2 className='text-4xl font-semibold text-center pb-6'>What We Do</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='feature-card dark:bg-base-100 '>
                    <div className='min-h-[200px]'>
                        <h2 className='feature-head'>Tree Plantation </h2>
                        <p className='py-2'>Join our community-driven tree plantation     |
                            | campaign and help make your city greener!</p>
                        <h4><span className='feature-location'>Location:</span> Central Park, Dhaka</h4>
                        <h4><span className='feature-number'>Trees Planted:</span> 500+</h4>
                    </div>
                    <button className='btn mt-3'>Learn more</button>
                </div>
                <div className='feature-card'>
                    <div className='min-h-[200px]'>
                        <h2 className='feature-head'>Blood Donation </h2>
                        <p className='py-2'>Description: Blood donation is a noble act that saves lives. This event inspires volunteers to donate blood to hospitals and emergency centers where patients suffering from accidents, surgeries</p>
                        <h4><span className='feature-location'>Location:</span> Central Park, Dhaka</h4>
                        <h4><span className='feature-number'>Trees Planted:</span> 500+</h4>
                    </div>
                    <button className='btn mt-3'>Learn more</button>
                </div>
                <div className='feature-card'>
                    <div className='min-h-[200px]'>
                        <h2 className='feature-head'>Cleaning </h2>
                        <p className='py-2'>The cleaning drive aims to create awareness about cleanliness, hygiene, and environmental responsibility.</p>
                        <h4><span className='feature-location'>Location:</span> Central Park, Dhaka</h4>
                        <h4><span className='feature-number'>Trees Planted:</span> 500+</h4>
                    </div>
                    <button className='btn mt-3'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;