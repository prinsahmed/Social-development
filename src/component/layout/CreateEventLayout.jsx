import React from 'react';
import NavBar from '../common/NavBar';
import CreateEvent from '../../pages/create event/CreateEvent';


const CreateEventLayout = () => {
    return (

        <div className='bg-gradient-to-br from-rose-100 via-amber-100 to-amber-50 min-h-screen'>
                <NavBar />
            <div className='max-w-10/12 mx-auto'>

                <CreateEvent />

            </div>
        </div>
    );
};
export default CreateEventLayout;