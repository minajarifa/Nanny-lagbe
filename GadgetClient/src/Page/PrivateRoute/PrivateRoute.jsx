import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

const PrivateRouter = () => {
    const {user,loading}=useAuth();
    const location =useLocation();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return Children ;
    }
    return <Navigate to="/Login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;