import axios from "axios"
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth/useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
export default function useAxiosSecure() {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use(res => {
        // console.log("response app e asar agei ami thamiye dekhechi ki ache er vetore")
        return res;
    },
        async error => {
            console.log(error);
            if (error?.response?.status == 401 || error?.response?.status == 403) {
                await logOut();
                navigate("/Login");
            }
            return Promise.reject(error);
        })
    return axiosSecure;
}
