import { createBrowserRouter } from "react-router";
import MainLayout from "../component/layout/MainLayout";
import RegisterLayout from "../component/layout/RegisterLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import CreateEventLayout from "../component/layout/CreateEventLayout";
import PrivateRoute from "../component/common/PrivateRoute";
import CreateEvent from "../pages/create event/CreateEvent";



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
        element:<PrivateRoute>
            <CreateEventLayout/>
        </PrivateRoute>
    }
])