import { useEffect, useState } from "react"
import useAuth from "../../../Hooks/useAuth/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyPosts() {
    const { user } = useAuth();

    const [posts, setPosts] = useState();
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/nannyCollection/${user?.email}`)
            setPosts(data)
        }
        getData()
    }, [user])
    console.log(posts)
    return (
        <div className="grid gap-5 ml-10 lg:grid-cols-2">
            {posts?.length < 1 && <p className="text-xl text-center">Loading...</p>}
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
                                        <img className="object-cover h-10 rounded-full" src={user?.photoURL} alt="Avatar" />
                                        <a className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex={0} role="link">{user?.displayName}</a>
                                    </div>
                                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                                </div>
                                <Link to={`/NannyDashboard/PostDetails/${post._id}`} className="btn btn-active btn-neutral">Show details</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
