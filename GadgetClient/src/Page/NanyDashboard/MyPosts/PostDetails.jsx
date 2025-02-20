
import { useParams } from "react-router-dom"
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails() {
  const { user } = useAuth();
  const [post, setPost] = useState()
  const { id } = useParams();
  console.log(id);
  // console.log(import.meta.env.VITE_API_URL)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/nanny/${id}`)
      console.log(data)
      setPost(data)
    }
    getData()
  }, [id])

  return (
    <div className="m-10">
      <div className="shadow-xl card card-side bg-base-100">
        <figure>
          <img
            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl card-title">{post?.name}'s post Detaills</h2>
          
          <p><span> Age</span> : {post?.age}</p>
          <p>Email : {post?.email}</p>
          <p>Duty : {post?.duty}</p>
          <p>Education : {post?.education}</p>
          <p>Experience : {post?.experience}</p>
          <p>Languages : {post?.languages}</p>
          <p>Phone Number : {post?.phoneNoumber}</p>
          <p>Skills : {post?.skills}</p>
        </div>
      </div>
    </div>
  )
}
