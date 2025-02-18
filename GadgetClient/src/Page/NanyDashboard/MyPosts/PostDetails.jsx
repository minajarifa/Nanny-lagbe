
import { useParams } from "react-router-dom"
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useEffect } from "react";
import axios from "axios";

export default function PostDetails() {
  const { user } = useAuth();
  const { id } = useParams();
  console.log(id);
  // console.log(import.meta.env.VITE_API_URL)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/nanny/${id}`)
      console.log(data)
    }
  getData()
  }, [id])

  return (
    <div className="m-10">
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
