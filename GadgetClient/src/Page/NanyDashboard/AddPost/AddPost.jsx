import { useForm } from "react-hook-form"

export default function AddPost() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="w-full hero-content">
            <div className="w-full bg-purple-200 shadow-2xl card shrink-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" {...register("age")} placeholder="Your Age" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" {...register("location")} placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">experience</span>
                            </label>
                            <select {...register("experience")} type="text" placeholder="experience" className="input input-bordered">
                                <option value="">experience</option>
                                <option value="6 Month">6 Month</option>
                                <option value="1 years">1 years</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years">3 years</option>
                                <option value="4 years">4 years</option>
                                <option value="5 years">5 years</option>
                                <option value="6 years">6 years</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Skills</span>
                            </label>
                            <select {...register("skills")} type="text" placeholder="experience" className="input input-bordered">
                                <option value="">experience</option>
                                <option value="Arts & Crafts">Arts & Crafts</option>
                                <option value="Outdoor Activities">Outdoor Activities</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Newborn Care">Newborn Care</option>
                                <option value="Twins Care">Twins Care</option>
                                <option value="Sleep Training">Sleep Training</option>
                                <option value="Light Housekeeping">Light Housekeeping</option>
                                <option value="Infant Care">Infant Care</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">contact</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">contact</span>
                            </label>
                            <input type="number" {...register("phoneNoumber")} placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">languages</span>
                            </label>
                            <input type="text" {...register("languages")} placeholder="languages" className="input input-bordered" required />
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
    )
}
