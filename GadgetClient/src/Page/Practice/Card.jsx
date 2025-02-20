import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";


export default function Card() {
    const { user } = useAuth()
    console.log(user)
    const [products, setProducts] = useState([])
    useEffect(() => {
        getData()
    }, [user])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/userProducts/${user?.email}`)
        setProducts(data)
    }
    // delete function
    const handleDelete = async (id) => {
        // try {
        const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
        console.log(data)
        if (data.deletedCount === 1) {
            Swal.fire("Post Successfully");
            getData();
        }
    }
    return (
        <div className="flex justify-center">
            <div>
                <h1 className="m-5 text-3xl font-bold text-center">Products: {products?.length}</h1>
                {
                    products?.length < 1 && <p className="text-3xl text-center">Loading... </p>
                }
                <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                    {
                        products?.map(product => (
                            <div key={product?._id} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="w-1/3 bg-cover">
                                    <img className="mt-5 ml-2 rounded" src={product?.photoURL} alt="" />
                                </div>
                                <div className="w-2/3 p-4 md:p-4">
                                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product?.userName}</h1>
                                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{product?.warranty}</h1>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product?.description} </p>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{product?.model}</p>
                                    <div className="flex mt-2 item-center">
                                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                    </div>
                                    <div className="flex justify-between mt-3 item-center">
                                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                                        <div className="flex gap-3">
                                            <Link to={`/UpdatePage/${product?._id}`}>
                                                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Update to Cart</button>
                                            </Link>
                                            <button onClick={() => handleDelete(product?._id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delete to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
