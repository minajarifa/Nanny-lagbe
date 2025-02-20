import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import useAuth from "../../Hooks/useAuth/useAuth";

export default function Sideber() {
    const { user } = useAuth();
    return (
        <div className="fixed h-full bg-purple-200">
            <aside className="flex flex-col w-64 px-4 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l dark:border-gray-700">
                <Link to="/" className="flex justify-center">
                    <img className="w-auto h-6 rounded sm:h-7" src="../../../public/download.png" alt=""/>
                </Link>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to="/" className="flex items-center px-4 py-2 rounded-md ">
                            <FaHome className="text-xl"/>
                            <button className="mx-4 font-medium">Home</button>
                        </Link>
                        <Link to="/NannyDashboard/NannyProfile" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md " >
                            <CgProfile className="text-xl"/>
                            <span className="mx-4 font-medium">My Accounts</span>
                        </Link>
                        <Link to="/NannyDashboard/MyPosts" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ">
                            <MdOutlinePostAdd className="text-xl"/>
                            <span className="mx-4 font-medium">My Posts</span>
                        </Link>
                        <Link to="/NannyDashboard/AddPost" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md">
                            <FaPen className="text-xl" />
                            <span className="mx-4 font-medium">Add a post</span>
                        </Link>
                        <Link  to="/NannyDashboard/SettingsPosts" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ">
                            <MdOutlineSettings className="text-xl" />
                            <span className="mx-4 font-medium">Settings</span>
                        </Link>
                        <hr className="my-6 border-gray-200 dark:border-gray-600" />
                        <Link className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md " >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" />
                            </svg>
                            <span className="mx-4 font-medium">Tickets</span>
                        </Link>
                        <Link className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md " >
                            <MdOutlineSettings className="text-xl" />
                            <span className="mx-4 font-medium">Settings</span>
                        </Link>
                    </nav>
                    <a className="flex items-center px-4 -mx-2">
                        <img className="object-cover mx-2 rounded-full h-9 w-9" src={user?.photoURL} alt="avatar" />
                        <span className="mx-2 font-medium ">{user?.displayName}</span>
                    </a>
                </div>
            </aside>
        </div>
    )
}
