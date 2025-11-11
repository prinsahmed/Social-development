import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";


const CreateEvent = () => {
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create New Event</h2>
            <form className="space-y-4">

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Event Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter event title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Description</label>
                    <textarea
                        rows={4}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Write a brief description"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Event Type</label>
                    <select
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
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter image URL"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Event Date</label>
                    <DatePicker
                        className="border border-gray-300 rounded pl-3 py-0.5"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={subDays(new Date(), 5)}
                        placeholderText="Select a date"
                    />
                </div>
                <button
                    type="button"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;