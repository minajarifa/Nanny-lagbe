import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import axios from "axios";

export default function usePostByEmail() {
    const { user } = useAuth();

    const [posts, setPosts] = useState();
    useEffect(() => {
        getData()
    }, [user?.email])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/nannyCollection/${user?.email}`
            , { withCredentials: true });
        setPosts(data)
    }

    return posts
}
