import { useForm } from "react-hook-form"
import useAuth from "../../../Hooks/useAuth/useAuth";
import axios from 'axios';
import Swal from "sweetalert2";
export default function AddPost() {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {
        const { age, experience, languages, location, name, phoneNoumber, skills, userName, email } = data;
        console.log(data);
        try {
            const  getData  = await axios.post(`${import.meta.env.VITE_API_URL}/nannyCollection`, data)
            console.log(getData)
            if(getData.data.acknowledged===true){
                Swal.fire("Posted successfully");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (<div>

        <h1 className="text-3xl text-center ">Add a post</h1>
        <div className="w-full hero-content">
            <div className="w-full bg-purple-200 shadow-2xl card shrink-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" {...register("education", { required: true })} placeholder="education" className="input input-bordered" />
                            {errors.education && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" {...register("age", { required: true })} placeholder="Your Age" className="input input-bordered" />
                            {errors.age && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" {...register("location", { required: true })} placeholder="location" className="input input-bordered" />
                            {errors.location && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">experience</span>
                            </label>
                            <select {...register("experience", { required: true })} type="text" placeholder="experience" className="input input-bordered">
                                <option value="">experience</option>
                                <option value="6 Month">6 Month</option>
                                <option value="1 years">1 years</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years">3 years</option>
                                <option value="4 years">4 years</option>
                                <option value="5 years">5 years</option>
                                <option value="6 years">6 years</option>
                            </select>
                            {errors.experience && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Skills</span>
                            </label>
                            <select {...register("skills", { required: true })} type="text" placeholder="experience" className="input input-bordered">
                                <option value="">Skills</option>
                                <option value="Arts & Crafts">Arts & Crafts</option>
                                <option value="Outdoor Activities">Outdoor Activities</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Newborn Care">Newborn Care</option>
                                <option value="Twins Care">Twins Care</option>
                                <option value="Sleep Training">Sleep Training</option>
                                <option value="Light Housekeeping">Light Housekeeping</option>
                                <option value="Infant Care">Infant Care</option>
                            </select>
                            {errors.skills && <span className="text-red-600">This field is required</span>}

                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">contact</span>
                            </label>
                            <input type="number" {...register("phoneNoumber", { required: true })} placeholder="Phone Number" className="input input-bordered" />
                            {errors.phoneNoumber && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">languages</span>
                            </label>
                            <input type="text" {...register("languages", { required: true })} placeholder="languages" className="input input-bordered" />
                            {errors.languages && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">profile_picture</span>
                            </label>
                            <input type="text" {...register("profile_picture")}  placeholder="profile_picture" className="input input-bordered" required />
                        </div> */}
                    </div>
                    <div className="mt-6 form-control">
                        <button className="bg-purple-400 btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}
