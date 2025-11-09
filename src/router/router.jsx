import { createBrowserRouter } from "react-router";
import MainLayout from "../component/layout/MainLayout";



export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout
    }
])