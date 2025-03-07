import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { FiGitPullRequest } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi2";
import useAuth from "../../Hooks/useAuth/useAuth";
import useUsersData from "../../Hooks/useUsersData/useUsersData";

export default function Sideber() {
    const { user } = useAuth();
    const userData = useUsersData();
    return (
        <div className="fixed h-full bg-purple-200">
            <aside className="flex flex-col w-64 px-4 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l dark:border-gray-700">
                <Link to="/" className="flex justify-center">
                    <img className="w-auto h-6 rounded sm:h-7" src="../../../public/download.png" alt="" />
                </Link>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to="/NannyDashboard/NannyProfile" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md " >
                            <CgProfile className="text-xl" />
                            <span className="mx-4 font-medium">My Accounts</span>
                        </Link>
                        {/*  */}
                        {
                            userData?.role === "Nanny" &&
                            (
                                <>
                                    <Link to="/NannyDashboard/AddPost" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md">
                                        <FaPen className="text-xl" />
                                        <span className="mx-4 font-medium">Add a post</span>
                                    </Link>
                                    <Link to="/NannyDashboard/MyPosts" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ">
                                        <MdOutlinePostAdd className="text-xl" />
                                        <span className="mx-4 font-medium">My Posts</span>
                                    </Link>
                                    <Link to="/NannyDashboard/BidRequest" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ">
                                        <FiGitPullRequest className="text-xl" />
                                        <span className="mx-4 font-medium">Bides Request</span>
                                    </Link>
                                    <Link to="/NannyDashboard/SettingsPosts" className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md ">
                                        <MdOutlineSettings className="text-xl" />
                                        <span className="mx-4 font-medium">Settings</span>
                                    </Link>
                                </>
                            )
                        }
                        <Link to="/" className="flex items-center px-4 py-2 rounded-md ">
                            <FaHome className="text-xl" />
                            <button className="mx-4 font-medium">Home</button>
                        </Link>
                        <hr className="my-6 border-gray-200 dark:border-gray-600" />
                        <Link className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md " >
                            <HiOutlineTicket className="text-xl" />
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
