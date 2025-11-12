import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { Link } from 'react-router';

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
        return <span className="loading loading-bars loading-xl"></span>
    }







    return (
        <div>
            <h2 className='text-center text-4xl font-medium my-20'>Upcoming Events...</h2>
            <div className='grid grid-cols-3 gap-10'>
                {
                    events.map(event => {
                        return <div key={event._id} className="bg-white p-4  shadow-lg rounded-lg overflow-hidden transition-transform duration-300">
                            <img
                                src={event.photoURL}
                                alt={event.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="space-y-2 min-h-[150px]">
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