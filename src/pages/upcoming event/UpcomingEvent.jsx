import React, { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { Link } from 'react-router';
import { debounce } from 'lodash';
import { motion } from "motion/react"


const UpcomingEvent = () => {
    const [events, setEvents] = useState();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("Filter Events Type");
    const [searchTerm, setSearchTerm] = useState("");



    useEffect(() => {
        axiosInstance.get('/events')
            .then(res => {
                setEvents(res.data)
                setLoading(false)
            })
    }, [])



    const fetchEvents = useCallback(

        debounce(async (searchTerm, category) => {
            try {
                setLoading(true)
                const params = new URLSearchParams();
                if (category !== "Filter Events Type") params.append("category", category);
                if (searchTerm) params.append("q", searchTerm);

                const res = await axiosInstance.get(`/events?${params.toString()}`);
                setEvents(res.data);
                setLoading(false)
            } catch (err) {
                console.error(err);
            }
        }, 600), []
    );


    useEffect(() => {
        fetchEvents(searchTerm, category);
    }, [searchTerm, category, fetchEvents]);


    if (loading) {
        return <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }







    return (
        <div className='min-h-dvh'>
            <title>Events</title>
            {
                events.length === 0 ? <h2 className=' text-center underline text-4xl my-14 font-medium '>No Events Available.</h2> : <h2 className='text-center underline text-4xl my-14 font-medium '>Upcoming Events...</h2>
            }

            <div className='flex justify-between mb-10'>
                <div className='text-xl font-medium'>
                    Events: ({events.length})
                </div>
                <div className='flex gap-x-3'>
                    <input className='input'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search Events' type="text" />
                    <select
                        name="event_category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input"
                    >
                        <option>Filter Events Type</option>
                        <option>Cleanup</option>
                        <option>Plantation</option>
                        <option>Donation</option>
                        <option>Awareness</option>
                    </select>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 pb-28 gap-16'>
                {


                    events.map(event => {
                        return <motion.div

                            initial={{ opacity: 0, scale: .7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            key={event._id} className="bg-white  feature-card shadow-lg rounded-lg overflow-hidden transition-transform duration-300">
                            <img
                                src={event.photoURL}
                                alt={event.title}
                                className="w-full h-60 object-cover rounded-sm"
                            />
                            <div className="space-y-2 min-h-[150px] ">
                                <h3 className="text-lg font-semibold ">{event.title}</h3>
                                <p className="text-gray-500 text-sm">{event.location}</p>
                                <p className="text-gray-500 text-sm">Type: {event.eventCat}</p>
                                <p className="text-gray-500 text-sm">
                                    Date: {new Date(event.selectedDate).toLocaleDateString()}
                                </p>

                            </div>
                            <Link to={`/up-event/details/${event._id}`} className="mt-2 btn bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                View Event
                            </Link>
                        </motion.div>
                    })






                }
            </div>

        </div>
    );
};

export default UpcomingEvent;