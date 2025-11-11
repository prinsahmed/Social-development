import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';

const UpcomingEvent = () => {
    const [events, setEvents] = useState();
    const[loading, setLoading] = useState(true);
    console.log(events)


    useEffect(() => {
        axiosInstance.get('/events')
            .then(res => {
                setEvents(res.data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }







    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                events.map(event => {
                  return  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                            src={event.photoURL}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                            <p className="text-gray-500 text-sm">{event.location}</p>
                            <p className="text-gray-500 text-sm">Type: {event.eventCat}</p>
                            <p className="text-gray-500 text-sm">
                                Date: {new Date(event.selectedDate).toLocaleDateString()}
                            </p>

                            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                View Event
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default UpcomingEvent;