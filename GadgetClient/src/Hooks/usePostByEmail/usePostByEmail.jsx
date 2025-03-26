import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function usePostByEmail() {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: posts = [], isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['nannyCollection',user?.email ],
    })
    if (error || isError) {
        console.log(isError);
        console.log("error",error);
    }
    const getData = async () => {
        const { data } = await axiosSecure(`/nannyCollection/${user?.email}`);
        return data;
    }
    return posts;
}
