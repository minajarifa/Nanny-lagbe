import axios from "axios";
import { useEffect, useState } from "react"
import { FaCommentDots } from "react-icons/fa";
import { GrDislike, GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";

export default function ServicesPage() {

    const [posts, setPosts] = useState();
    const [users, setUsers] = useState();
    useEffect(() => {
        getData()
        getUsers()
    }, [])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/nannyCollection`);
        setPosts(data)
    }
    const getUsers = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/usersData`);
        setUsers(data)
    }
    console.log(users)
    console.log(posts)
    return (
        <div>
            <p className="mb-5 text-4xl text-center">Posts : {posts?.length}</p>
            <div className="grid gap-5 mx-10 ml-10 lg:grid-cols-2">
                {
                    posts?.map(post => (
                        <div key={post?._id} className="max-w-2xl overflow-hidden rounded-lg shadow-md dark:bg-gray-800 ">
                            {/* <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" /> */}
                            <div className="p-6">
                                <div>
                                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                                    <a className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex={0} role="link">I Built A Successful Blog In One Year</a>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                                </div>
                                <div className="flex justify-between mt-4 ">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <img className="object-cover h-10 rounded-full" src={post?.photoURL || "https://i.ibb.co.com/27rSBcKC/download.png"} alt="Avatar" />
                                            <a className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex={0} role="link">{post?.email}</a>
                                        </div>
                                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{users?.map(user => (<p key={user?.email}>{post.email === user.email && user?.role}</p>))}</span>
                                    </div>
                                    <Link to={`/NannyDashboard/PostDetails/${post._id}`} className="btn btn-active btn-neutral">Show details</Link>
                                </div>
                                <hr className="my-5" />
                                <div className="flex gap-10 text-white">
                                    <button title="Like" className="flex m-5"><GrLike className="mt-1 mr-2" /> <span className="">Like</span></button>
                                    <button title="Dislike" className="flex m-5"><GrDislike className="mt-1 mr-2" /><span>Dislike</span></button>
                                    <Link to={`/ServicesCommentPage/${post._id}`} title="Comment" className="flex m-5"><FaCommentDots className="mt-1 mr-2" /><span>Comment</span></Link>
                                    <Link to={`/ServicesCommentPage/${post._id}`} title="Comment" className="flex m-5"><CiBookmarkCheck className="mt-1 mr-2" /><span>Book Now</span></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
