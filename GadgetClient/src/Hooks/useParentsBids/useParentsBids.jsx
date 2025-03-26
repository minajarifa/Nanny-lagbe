import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure";

export default function useParentsBids() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data:myBides=[], error, isError } = useQuery({
        queryFn: () => getData(),
        queryKey: ["booking", user?.email],
    })
    if (error, isError) {
        console.log(error)
        console.log(isError)
    }
    const getData = async () => {
        const { data } = await axiosSecure(`/booking/${user?.email}`);
        return data;
    }
    return myBides;
}