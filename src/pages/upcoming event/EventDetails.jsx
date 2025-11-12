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
        return <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }



    function handleJoinEvent() {


        if (user) {

            const newUser = { ...eventDetails };
            newUser.email = user.email;
            newUser.id = newUser._id;
            delete newUser._id

            axiosInstance.post('/join-event', newUser)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            icon: "success",
                            title: "Congratulations",
                            text: "You have joined this event"
                        });
                    }

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
        <div className='flex justify-center items-center min-h-dvh'>
            <div className='feature-card p-3 rounded-sm'>
                <img className='w-[400px] h-[400px] block mx-auto rounded-sm' src={eventDetails.photoURL} alt={eventDetails.title} />
                <p className='my-5'>Description: {eventDetails.description}</p>
                <div className='flex justify-center'>
                    <button onClick={handleJoinEvent} className='btn'>Join Event</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;