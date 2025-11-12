import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';
import { axiosInstance } from '../../api/axiosInstance';

const JoinedEvent = () => {


    const { user } = useContext(Context);
    const [joinedData, setJoinedData] = useState();
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        axiosInstance.get(`/joined-event?email=${user?.email}`)
            .then(res => {
                setJoinedData(res.data)
                setLoading(false)
            })
    }, [user?.email])

    if (loading) {
        return <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }

    return (
        <div className='min-h-dvh'>
            <h2 className='text-4xl font-medium text-center mt-14'>Events you joined</h2>
            <h3>Events: {joinedData.length}</h3>
            <div className='pb-28'>
                {
                    joinedData.map(data => {
                        return <div key={data._id} className='feature-card flex items-center gap-x-4 mt-3 rounded-sm'>
                                <img className='w-[120px] h-[120px] rounded-sm' src={data.photoURL} alt={data.title} />
                                <div className='space-y-1'>
                                    <h3>Title: {data.title}</h3>
                                    <h4>Category: {data.eventCat}</h4>
                                    <h5>Location: {data.location}</h5>
                                    <h5>Date: {data.selectedDate}</h5>
                                </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default JoinedEvent;