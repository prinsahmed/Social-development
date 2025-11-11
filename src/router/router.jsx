import { createBrowserRouter } from "react-router";
import MainLayout from "../component/layout/MainLayout";
import RegisterLayout from "../component/layout/RegisterLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import CreateEventLayout from "../component/layout/CreateEventLayout";
import UpcomingEventLayout from "../component/layout/UpcomingEventLayout";
import PrivateRoute from "../component/common/PrivateRoute";
import EventDetails from "../pages/upcoming event/EventDetails";
import UpcomingEvent from "../pages/upcoming event/UpcomingEvent";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout
    },
    {
        path: '/auth',
        Component: RegisterLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/create-event',
        element: <PrivateRoute>
            <CreateEventLayout />
        </PrivateRoute>
    },
    {
        path: '/up-event',
        Component:UpcomingEventLayout , 
        children: [
            {
                index:true,
                Component: UpcomingEvent
            },
            {
                path: '/up-event/details/:id',
                Component: EventDetails
            }
        ]
    }
])