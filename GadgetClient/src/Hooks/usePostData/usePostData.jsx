import { useEffect, useState } from "react";
import useAxiosBase from "../useAxiosBase/useAxiosBase";


export default function usePostData() {
    const axiosBase = useAxiosBase();
    const [posts, setPosts] = useState();
    useEffect(() => {
        getData();
      
    }, [])
    const getData = async () => {
        const { data } = await axiosBase(`/nannyCollection`);
        setPosts(data)
    }
  return posts
}
