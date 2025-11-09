import React from 'react';
import treeImg from '../../assets/tree plantation.jpg'
import road from '../../assets/repair road.jpg'
import areaClean from '../../assets/cleaning area.jpg'


const Gallery = () => {
    return (
        <div className='pt-36'>
            <h2 className='text-4xl font-semibold text-center pb-6'>Stories Through Pictures</h2>
            <div className='grid grid-cols-3 gap-4'>
                <div >
                    <img className='h-[450px] w-full rounded-sm' src={treeImg} alt="Tree plantation image" />
                    <h2 className='font-medium text-center'>Tree Plantation</h2>
                </div>
                <div >
                    <img className='h-[450px] w-full rounded-sm' src={road} alt="Road repairing image" />
                    <h2 className='font-medium text-center'>Road Repairing</h2>
                </div>
                <div >
                    <img className='h-[450px] w-full rounded-sm' src={areaClean} alt="Cleaning image" />
                    <h2 className='font-medium text-center'>Cleaning</h2>
                </div>
            </div>
        </div>
    );
};

export default Gallery;