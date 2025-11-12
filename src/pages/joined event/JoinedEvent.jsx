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
        return <span className="loading loading-bars loading-xl"></span>
    }

    return (
        <div>
            <h2 className='text-4xl font-medium text-center mt-10'>Events you joined</h2>
            <h3>Events: {joinedData.length}</h3>
            <div >
                {
                    joinedData.map(data => {
                        return <div key={data._id} className='bg-blue-300 flex items-center gap-x-4 mt-3 p-3 rounded-sm'>
                                <img className='rounded-full w-[30px]' src={data.photoURL} alt={data.title} />
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