import { Link, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { GrDislike, GrLike } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ServicesCommentPage() {
    const { user } = useAuth()
    const { id } = useParams();

    const [post, setPost] = useState()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/nanny/${id}`);
        setPost(data);
    }
    const handleCommment = (event) => {
        event.preventDefault();
        console.log(event.target.comment.value);
    }
    return (
        <div className="flex justify-center">
            <div className="max-w-2xl overflow-hidden rounded-lg shadow-md dark:bg-gray-800 ">
                {/* <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" /> */}
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{post?.name}&lsquo;s  Post</span>
                        <a className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex={0} role="link">I Built A Successful Blog In One Year</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    </div>
                    <div className="flex justify-between mt-4 ">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={user?.photoURL} alt="Avatar" />
                                <a className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex={0} role="link">{user?.email}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>
                        <Link to={`/NannyDashboard/PostDetails/:id`} className="btn btn-active btn-neutral">Show details</Link>
                    </div>
                    <hr className="my-5" />
                    <div className="flex gap-10 text-white">
                        <button title="Like" className="flex m-5"><GrLike className="mt-1 mr-2" /> <span className="">Like</span></button>
                        <button title="Dislike" className="flex m-5"><GrDislike className="mt-1 mr-2" /><span>Dislike</span></button>
                        <Link to={`/ServicesCommentPage/:id`} title="Comment" className="flex m-5"><FaCommentDots className="mt-1 mr-2" /><span>Comment</span></Link>
                    </div>
                    <hr/>
                    {/*  */}
                    <div className="">
                        <form onSubmit={handleCommment} className=" card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="comment" placeholder="Comment here" className="input input-bordered" />
                            </div>
                            
                                <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    )
}