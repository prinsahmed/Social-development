import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';
import { axiosInstance } from '../../api/axiosInstance';
import { subDays } from 'date-fns';
import { useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';

const UpdateEvent = () => {
    const { user } = useContext(Context);
    const [manageData, setManageData] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const { id } = useParams();
    const [eventCat, setEventCat] = useState("");


    useEffect(() => {
        axiosInstance.get(`/edit-event/${id}`)
            .then(res => {
                setManageData(res.data)
                setEventCat(res.data.eventCat)
                setSelectedDate(res.data.selectedDate)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <div className='flex justify-center h-dvh items-center'><span className="loading loading-dots loading-xl"></span></div>
    }



    function handleUpdateEvent(e) {
        e.preventDefault();

        const createEventData = {
            title: e.target.title.value,
            email: user.email,
            description: e.target.description.value,
            eventCat: e.target.event_category.value,
            photoURL: e.target.imageURL.value,
            location: e.target.location.value,
            selectedDate
        }

        axiosInstance.put(`/update-event/${id}`, createEventData)
            .then(res => {
                if (res) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulations",
                        text: "Event successfully updated"
                    });
                }
            })

        e.target.reset();
    }






    return (
        <div className='pb-28'>
            <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update Event</h2>
                <form onSubmit={handleUpdateEvent} className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Event Title</label>
                        <input
                            name="title"
                            type="text"
                            required
                            defaultValue={manageData.title}
                            className="input"
                            placeholder="Enter event title"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Description</label>
                        <textarea
                            rows={4}
                            name="description"
                            required
                            defaultValue={manageData.description}
                            className="input"
                            placeholder="Write a brief description"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Event Type</label>
                        <select
                            name="event_category"
                            required
                            defaultValue={eventCat}
                            onChange={(e) => setEventCat(e.target.value)}
                            className="input"
                        >
                            <option>Select Type</option>
                            <option>Cleanup</option>
                            <option>Plantation</option>
                            <option>Donation</option>
                            <option>Awareness</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Thumbnail Image URL</label>
                        <input
                            name="imageURL"
                            type="text"
                            required
                            defaultValue={manageData.photoURL}
                            className="input"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Location</label>
                        <input
                            name="location"
                            type="text"
                            required
                            defaultValue={manageData.location}
                            className="input"
                            placeholder="Enter location"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Event Date</label>
                        <DatePicker
                            className="border border-gray-300 rounded-xs pl-3 py-0.5"
                            selected={selectedDate}
                            required
                            onChange={(date) => setSelectedDate(date)}
                            minDate={subDays(new Date(), 0)}
                            placeholderText="Select a date"
                        />
                    </div>
                    <button

                        className="w-full btn text-white font-semibold  rounded-sm"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;