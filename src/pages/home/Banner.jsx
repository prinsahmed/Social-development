import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div 
        className='h-dvh bg-center bg-cover bg-no-repeat hero1'
        style={{
            backgroundImage:`url(${bannerImg})`
        }}>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-7xl leading-22 text-gray-100  pt-38 hero-content1  text-center '>Together<br />for a Better Tomorrow</h1>
            </div>
            
        </div>
    );
};

export default Banner;