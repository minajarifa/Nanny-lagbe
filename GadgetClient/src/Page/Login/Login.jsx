import {
    Link, useNavigate,
    // useLocation, useNavigate
} from "react-router-dom";
import SocialLogin from "../../SimpleComponents/SociaLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const { signIn } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const { email, password } = data;
        console.log(email, password)
        try {
            const result = await signIn(email, password);
            console.log(result.user.email);
            const data = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                { email: result?.user?.email },
                { withCredentials: true });
            console.log(data)
            // start
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User has been created",
                showConfirmButton: false,
                timer: 1500
            });
            // end
        } catch (error) {
            console.log(error)
        }
        // signIn(email, password)
        //     .then(result => {
        //         console.log(result);
        //         // start
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "User has been created",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         // end
        //     })
        navigate('/')
    }
    // const handleLoginSubmit = async (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value; 
    //     const password = form.password.value;
    //     console.log("Attempting login with:", { email, password });
    //     try {
    //         const result = await signIn(email, password);
    //         console.log("Login successful:", result);
    //     } catch (error) {
    //         console.error("Login failed:", error.code, error.message);
    //     }
    // };

    return (
        <div className="flex items-center justify-center">
            <Helmet>
                <title>sample || Login</title>
            </Helmet>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>New to this site please <Link to="/Register" className="text-blue-400"> Register </Link> Now</p>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
