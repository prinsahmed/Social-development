import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';
import { axiosInstance } from '../../api/axiosInstance';
import { Link } from 'react-router';
import { motion } from "motion/react"




const ManageEvent = () => {

    const { user } = useContext(Context);
    const [manageData, setManageData] = useState();
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        axiosInstance.get(`/manage-event?email=${user?.email}`)
            .then(res => {

                setManageData(res.data)
                setLoading(false)
            })
    }, [user?.email])

    if (loading) {
        return <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }




    return (
        <>
            <div>
                {
                    manageData.length === 0 ? <h2 className=' text-center underline text-4xl my-14 font-medium '>No Events Managed.</h2> : <h2 className='text-center underline text-4xl my-14 font-medium '>Managed Events</h2>
                }
                <h3 className='text-xl font-medium'>Events: ({manageData.length})</h3>
                <div className='pb-28'>
                    {
                        manageData.map(data => {
                            return <motion.div

                                initial={{ opacity: 0, scale: .7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                                key={data._id} className='feature-card flex items-center gap-x-4 mt-3 rounded-sm'>
                                <img className=' w-[120px] h-[120px] rounded-sm' src={data.photoURL} alt={data.title} />
                                <div className='space-y-1'>
                                    <h3>Title: {data.title}</h3>
                                    <h4>Category: {data.eventCat}</h4>
                                    <h5>Location: {data.location}</h5>
                                    <Link to={`/manage-event/update-event/${data._id}`} className='btn'>Edit Event</Link>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
            </div>

        </>

    );
};

export default ManageEvent;