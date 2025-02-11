import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'


export default function UpdatePage() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/singleProduct/${id}`)
            setProduct(data)
            console.log("data", data)
        }
        getData()
        // fetch(`http://localhost:5000/singleProduct/${id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setProduct(data)
        //     })
    }, [id])
    const handleUpadteSumitForm = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const model = form.model.value;
        const category = form.category.value;
        const description = form.description.value;
        const warranty = form.warranty.value;
        const GadgetInfo = { name, brand, model, category, description, warranty }
        console.log(GadgetInfo);
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updateProduct/${product._id}`,GadgetInfo)
            console.log(data)
            if(data.modifiedCount===1){
                  Swal.fire("Updated Successfully");
            }
        } catch (error) {
            console.log(error)
        }
        // fetch(`http://localhost:5000/updateProduct/${product?._id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(GadgetInfo)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         if(data.acknowledged===true){
        //             Swal.fire("Post Successfully");
        //         }
        //     })
    }
    return (
        <div>
            <div className="my-10">
                <h1 className="m-5 text-4xl text-center">Update this post</h1>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
                    <form onSubmit={handleUpadteSumitForm}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200"> Gadget Name</label>
                                <input required name="name" defaultValue={product?.name} placeholder=" Gadget Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Brand Name</label>
                                <input required name="brand" defaultValue={product?.brand} placeholder="Brand Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Model Number</label>
                                <input required name="model" defaultValue={product?.model} placeholder="Model Number" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Category</label>
                                <input required name="category" defaultValue={product?.category} placeholder="Category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Warranty</label>
                                <input required name="warranty" defaultValue={product?.warranty} placeholder="warranty" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Short Description</label>
                                <input required name="description" defaultValue={product?.description} placeholder="Short Description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <button type="submit" className="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
