import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure";

export default function usePostByEmail() {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [posts, setPosts] = useState();
    useEffect(() => {
        getData();
    }, [user]);
    const getData = async () => {
        const { data } = await axiosSecure(`/nannyCollection/${user?.email}`);
        setPosts(data);
    }
    return posts;
}
