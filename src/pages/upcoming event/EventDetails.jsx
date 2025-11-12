import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { axiosInstance } from '../../api/axiosInstance';
import { Context } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const EventDetails = () => {

    const { user } = useContext(Context);
    const [eventDetails, setEventDetails] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();



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



    function handleJoinEvent() {


        if (user) {
            
            const newUser = { ...eventDetails };
            newUser.email = user.email;
            newUser.id = newUser._id;
            delete newUser._id

            axiosInstance.post('/join-event', newUser)
                .then(res => {
                    console.log(res)

                })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your are not logged in"
            });

        }
    }





    return (
        <div className='flex justify-center items-center h-dvh'>
            <div>
                <img src={eventDetails.photoURL} alt={eventDetails.title} />
                <p className='my-5'>Description: {eventDetails.description}</p>
                <button onClick={handleJoinEvent} className='btn'>Join Event</button>
            </div>
        </div>
    );
};

export default EventDetails;