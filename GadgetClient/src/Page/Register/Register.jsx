/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SocialLogin from "../../SimpleComponents/SociaLogin/SocialLogin";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import axios from 'axios';

const Register = () => {
    const { createUser, updateUserProfile, user, setUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password, name, photo, role } = data;
        console.log(data)
        try {
            const user = await createUser(email, password);
            await updateUserProfile(name, photo)
            const userData = await axios.post(`${import.meta.env.VITE_API_URL}/userData`, data)
            console.log("userData",userData.data)
            // start
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
            });
            // end
        } catch (error) {
            console.log(error)
        }
        // createUser(email, password)
        //     .then(result => {
        //         updateUserProfile(name, photo)
        //         const loggedUser = result.user
        //         console.log(loggedUser)
        //         console.log(result)
        //         // start
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "User created successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         // end
        //     })
    }


    // const handleRegisterSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const pass = form.password.value;
    //     const email = form.email.value;
    //     const name = form.name.value;
    //     const photo = form.photo.value;
    //     const user = { pass, email, name, photo };
    //     console.log('user', user);
    // }

    return (
        <div >
            <Helmet>
                <title>sample||Register</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Role</span>
                            </label>
                            <select
                                {...register("role", { required: true })}
                                className="select select-bordered"
                            >
                                <option value="">Select a role</option>
                                <option value="Parents">Parents</option>
                                <option value="Nanny">Nanny</option>
                                {/* Add more options as needed */}
                            </select>
                            {errors.role && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>New to this site please <Link to="/Login" className="text-blue-400"> Login </Link> Now</p>
                    </form>
                    <SocialLogin />
                </div>
            </div>


        </div>
    );
};

export default Register;
