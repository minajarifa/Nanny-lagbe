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
        formState: { errors },
    } = useForm();




    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const pass = form.password.value;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const role = "Parents";
        const userInfo = { pass, email, name, photo, role };
        console.log('user', userInfo);
        try {
            const user = await createUser(email, pass);
            await updateUserProfile(name, photo)
            const userData = await axios.post(`${import.meta.env.VITE_API_URL}/userData`, userInfo)
            const data = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                { email: user?.user?.email },
                { withCredentials: true });
            console.log(data)
            
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
    }

    return (
        <div >
            <Helmet>
                <title>sample||Register</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm shadow-2xl card bg-base-100">
                    <form
                        // onSubmit={handleSubmit(onSubmit)} 
                        onSubmit={handleRegisterSubmit}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input name="photo" {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <label className="label">
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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
