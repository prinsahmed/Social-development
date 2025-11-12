import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { Link } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const UpcomingEvent = () => {
    const [events, setEvents] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/events')
            .then(res => {
                setEvents(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return  <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }







    return (
        <div className='min-h-dvh'>

            {
                events.length === 0 ? <h2 className=' text-center text-4xl my-14 font-medium '>No Events Available.</h2> : <h2 className='text-center text-4xl my-14 font-medium '>Upcoming Events...</h2>
            }

            <div className='grid grid-cols-3 pb-28 gap-16'>
                {


                    events.map(event => {
                        return <div key={event._id} className="bg-white  feature-card shadow-lg rounded-lg overflow-hidden transition-transform duration-300">
                            <img
                                src={event.photoURL}
                                alt={event.title}
                                className="w-full h-60 object-cover rounded-sm"
                            />
                            <div className="space-y-2 min-h-[150px] ">
                                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                                <p className="text-gray-500 text-sm">{event.location}</p>
                                <p className="text-gray-500 text-sm">Type: {event.eventCat}</p>
                                <p className="text-gray-500 text-sm">
                                    Date: {new Date(event.selectedDate).toLocaleDateString()}
                                </p>

                            </div>
                            <Link to={`/up-event/details/${event._id}`} className="mt-2 btn bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                View Event
                            </Link>
                        </div>
                    })






                }
            </div>

        </div>
    );
};

export default UpcomingEvent;