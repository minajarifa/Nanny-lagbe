import { Link } from "react-router-dom";
import SocialLogin from "../../SimpleComponents/SociaLogin/SocialLogin";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
    const { createUser, updateUserProfile } = useAuth();
    // console.log(updateUserProfile)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, photo } = data;
        console.log(data)
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                const loggedUser = result.user
                console.log(loggedUser)
                console.log(result)
                // start
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // end
            })
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
            <div className="flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
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


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to this site please <Link to="/Login" className="text-blue-400"> Login </Link> Now</p>
                    </form>
                    <SocialLogin />
                </div>
            </div>


        </div>
    );
};

export default Login;
