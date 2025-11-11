import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { axiosInstance } from '../../api/axiosInstance';

const EventDetails = () => {


    const [eventDetails, setEventDetails] = useState();
    const[loading, setLoading] = useState(true);
    const {id} = useParams();


    console.log(eventDetails);

    useEffect(() => {
        axiosInstance.get(`/event-details/${id}`)
            .then(res => {
                setEventDetails(res.data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }



    return (
        <div className='flex justify-center items-center h-dvh'>
            <div>
                <img src={eventDetails.photoURL} alt={eventDetails.title} />
                <p className='my-5'>Description: {eventDetails.description}</p>
                <button className='btn'>Join Event</button>
            </div>
        </div>
    );
};

export default EventDetails;