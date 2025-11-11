import { createBrowserRouter } from "react-router";
import MainLayout from "../component/layout/MainLayout";
import RegisterLayout from "../component/layout/RegisterLayout";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";



export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout
    },
    {
        path:'/auth',
        Component:RegisterLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    }
])