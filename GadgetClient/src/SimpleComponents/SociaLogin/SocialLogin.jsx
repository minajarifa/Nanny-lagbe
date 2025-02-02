import { FaGithubAlt } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";

const SocialLogin = () => {
    const { signInWithGoogle,signInWithGithub } = useAuth();
    return (
        <div className="flex  justify-center text-4xl">
            <button onClick={()=>signInWithGithub()} className="m-5"><FaGithubAlt /></button>
            <button onClick={()=>signInWithGoogle()} className="m-5"><FcGoogle/></button>
        </div>
    );
};

export default SocialLogin;