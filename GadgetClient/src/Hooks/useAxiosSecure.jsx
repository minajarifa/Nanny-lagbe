import axios from "axios"
import useAuth from "./useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
export default function useAxiosSecure() {
    const { logout } = useAuth();
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(res => {
        // console.log("response app e asar agei ami thamiye dekhechi ki ache er vetore")
        return res;
    },
        async error => {
            console.log(error);
            if (error?.response?.status == 401 || error?.response?.status == 403) {
                await logout();
                navigate("/Login");
            }
            return Promise.reject(error)
        })
    return axiosSecure;
}
