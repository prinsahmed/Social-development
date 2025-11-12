import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';
import { axiosInstance } from '../../api/axiosInstance';
import { Link } from 'react-router';





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
                <h2 className='text-4xl font-medium text-center my-14'>Manage Event</h2>
                <h3>Events: {manageData.length}</h3>
                <div className='pb-28'>
                    {
                        manageData.map(data => {
                            return <div key={data._id} className='feature-card flex items-center gap-x-4 mt-3 rounded-sm'>
                                <img className=' w-[120px] h-[120px] rounded-sm' src={data.photoURL} alt={data.title} />
                                <div className='space-y-1'>
                                    <h3>Title: {data.title}</h3>
                                    <h4>Category: {data.eventCat}</h4>
                                    <h5>Location: {data.location}</h5>
                                    <Link to={`/manage-event/update-event/${data._id}`} className='btn'>Edit Event</Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            
        </>

    );
};

export default ManageEvent;