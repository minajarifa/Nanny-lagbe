import axios from "axios";
import { useEffect, useState } from "react";


export default function usePostData() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getData()
      
    }, [])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/nannyCollection`);
        setPosts(data)
    }
  return posts
}
