import { FaCommentDots } from "react-icons/fa"   
import { GrDislike, GrLike } from "react-icons/gr"   
import { Link } from "react-router-dom"   
import { FaRegBookmark } from "react-icons/fa6"   
import useAuth from "../../Hooks/useAuth/useAuth"   
import useUsersData from "../../Hooks/useUsersData/useUsersData"   
import { FaArrowLeft } from "react-icons/fa6"   
import { FaArrowRight } from "react-icons/fa"   
import { useEffect, useState } from "react"   
import useAxiosBase from "../../Hooks/useAxiosBase/useAxiosBase"   
export default function ServicesPage() {
    const axiosBase = useAxiosBase()
    const { user } = useAuth()   
    const userData = useUsersData()   
    const [posts, setPosts] = useState([])   
    const [count, setCount] = useState(0)   
    const [filter, setFilter] = useState('')   
    // eslint-disable-next-line no-unused-vars
    const [itemPerPage, setItemPerPage] = useState(4)   
    const [currentPage, setCurrentPage] = useState(1)   
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosBase(`/nannyCollection?page=${currentPage}&size=${itemPerPage}&filter=${filter}`)   
            setPosts(data)   
        }
        getData()   
    }, [axiosBase, itemPerPage, currentPage, filter])   
    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosBase(`/post-count?filter=${filter}`)
            setCount(data.count);
        }
        getData()
    }, [axiosBase,filter])
    const numberOfPerPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPerPages).keys()].map(element => element + 1)
    const handlePaginationPerPage = (value) => {
        console.log(currentPage)
        setCurrentPage(value)
    }
    const handleBookButton = async (post) => {
        const parentName = user.displayName
        const parentEmail = user.email
        const parentPhotoURL = user.photoURL
        const parentRole = userData.role
        const status = "pending"
        const name = post.name
        const email = post.email
        if (email === user.email) return console.log("sorry apu hobe na")
        const role = post.role
        const photoUR = post.photoUR   
        const phoneNoumber = post.name   
        const education = post.education   
        const age = post.age   
        const location = post.location   
        const experience = post.experience   
        const skills = post.skills   
        const languages = post.languages   
        const duty = post.duty   
        const nannyInfo = { name, email, role, photoUR, phoneNoumber, education, age, location, experience, skills, languages, duty, parentName, parentEmail, parentPhotoURL, parentRole, status }
        const { data } = await axiosBase.post(`/booking`, nannyInfo)   
        console.log(data)   
    }
    return (
        <div className="mx-10">
            <div className="flex items-center justify-center">
                <select onChange={e => setFilter(e.target.value)} defaultValue={filter} className="select">
                    <option value="Arts & Crafts">Arts & Crafts</option>
                    <option value="Sleep Training">Sleep Training</option>
                    <option value="Outdoor Activities">Outdoor Activities</option>
                    <option value="Newborn Care">Newborn Care</option>
                </select>
                <select defaultValue="Pick an AI Model" className="select ">
                    <option >sort by deadline</option>
                    <option>GPT-4</option>
                    <option>Claude</option>
                    <option>Llama</option>
                </select>

            </div>
            {/* heading end */}
            <p className="mb-5 text-4xl text-center">Posts : {posts?.length}</p>
            <div className="grid gap-5 mx-10 lg:grid-cols-2">
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
                                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{post?.role}</span>
                                    </div>
                                    <Link to={`/NannyDashboard/PostDetails/${post._id}`} className="btn btn-active btn-neutral">Show details</Link>
                                </div>
                                <hr className="my-5" />
                                <div className="flex gap-10 text-white">
                                    <button title="Like" className="flex m-5"><GrLike className="mt-1 mr-2" /> <span className="">Like</span></button>
                                    <button title="Dislike" className="flex m-5"><GrDislike className="mt-1 mr-2" /><span>Dislike</span></button>
                                    <Link to={`/ServicesCommentPage/${post._id}`} title="Comment" className="flex m-5"><FaCommentDots className="mt-1 mr-2" /><span>Comment</span></Link>
                                    <button onClick={() => handleBookButton(post)} title="Comment" className="flex m-5"><FaRegBookmark className="mt-1 mr-2" /><span>Book Now</span></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* pagination */}
            <div className="flex items-start justify-center my-5">
                <div className="flex">
                    <button disabled={currentPage === 1} onClick={() => handlePaginationPerPage(currentPage - 1)} className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600`}>
                        <div
                            className="flex items-center -mx-1">
                            <FaArrowLeft />
                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </button>

                    {
                        pages.map(page => (
                            <button
                                key={page}
                                onClick={() => handlePaginationPerPage(page)}
                                className={`${currentPage === page ? "bg-blue-400" : "bg-gray-800"} 
                                hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md  sm:inline text-white`}>
                                {page}
                            </button>))
                    }
                    <button
                        disabled={currentPage === numberOfPerPages}
                        onClick={() => handlePaginationPerPage(currentPage + 1)}
                        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>
                            <FaArrowRight />
                        </div>
                    </button>
                </div>
            </div>
            {/* pagination end */}
        </div>
    )
}