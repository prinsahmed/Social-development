import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";
import { axiosInstance } from "../../api/axiosInstance";
import { Context } from "../../context/AuthContext";


const CreateEvent = () => {
    const { user } = useContext(Context);
    const [selectedDate, setSelectedDate] = useState(null);
    function handleCreateEvent(e) {
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

        axiosInstance.post('/create-event', createEventData)

    }




    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create New Event</h2>
            <form onSubmit={handleCreateEvent} className="space-y-4">

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Event Title</label>
                    <input
                        name="title"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter event title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Description</label>
                    <textarea
                        rows={4}
                        name="description"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Write a brief description"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Event Type</label>
                    <select
                        name="event_category"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter image URL"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Location</label>
                    <input
                        name="location"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Event Date</label>
                    <DatePicker
                        className="border border-gray-300 rounded pl-3 py-0.5"
                        selected={selectedDate}
                        required
                        onChange={(date) => setSelectedDate(date)}
                        minDate={subDays(new Date(), 5)}
                        placeholderText="Select a date"
                    />
                </div>
                <button

                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;