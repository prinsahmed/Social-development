import React from 'react';
import NavBar from '../common/NavBar';
import UpcomingEvent from '../../pages/upcoming event/UpcomingEvent';

const UpcomingEventLayout = () => {
    return (
        <div>
            <NavBar/>
            <UpcomingEvent/>
        </div>
    );
};

export default UpcomingEventLayout;