import axios from "axios";
import { auth } from "../firebase/firebase";



export const axiosInstance = axios.create({
    baseURL: 'https://social-development-server-nine.vercel.app',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser;
        if (user) {
            const idToken = await user.getIdToken(); 
            config.headers.Authorization = `Bearer ${idToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);