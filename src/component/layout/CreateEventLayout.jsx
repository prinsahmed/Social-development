import React from 'react';
import NavBar from '../common/NavBar';
import CreateEvent from '../../pages/create event/CreateEvent';
import Footer from '../common/Footer';


const CreateEventLayout = () => {
    return (

        <div className=' min-h-screen'>
                <NavBar />
            <div className='max-w-10/12 mx-auto'>

                <CreateEvent />

            </div>
            <Footer/>
        </div>
    );
};
export default CreateEventLayout;