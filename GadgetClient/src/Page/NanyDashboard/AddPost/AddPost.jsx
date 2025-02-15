import { useForm } from "react-hook-form"

export default function AddPost() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="w-full hero-content">
            <div className="w-full shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("Name")} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input type="" placeholder="Your Age" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <input type="" placeholder="location" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">experience</span>
                        </label>
                        <select {...register("experience")} type="text" placeholder="experience"   className="input input-bordered">
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
                            <span className="label-text">skills</span>
                        </label>
                        <input type="" placeholder="skills" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">contact</span>
                        </label>
                        <input type="" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">contact</span>
                        </label>
                        <input type="" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">languages</span>
                        </label>
                        <input type="" placeholder="languages" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">profile_picture</span>
                        </label>
                        <input type="" placeholder="profile_picture" className="input input-bordered" required />
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
