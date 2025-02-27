import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
// import useAuth from "../../Hooks/useAuth/useAuth";


const Navber = () => {
    const { logOut, user } = useAuth();



    const Navigate =
        <>
            <Link className="m-2" to="/">Home</Link>
            <Link className="m-2" to="/Practice">Practice</Link>
            <Link className="m-2" to="/ServicesPage">Services Page</Link>
            <Link className="m-2" to="/AboutUs">About Us</Link>
            <p className="m-2">{user?.displayName}</p>
            
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Navigate}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold btn btn-ghost">
                        {/* Gadget Shop */}
                        Nanny Lagbe
                        </a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {Navigate}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* profile start */}
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="profile"
                                    src={user?.photoURL||"https://www.gettyimages.com/photos/profile"} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to="/NannyDashboard/NannyProfile">
                               Dashboard
                            </Link>
                            
                            <button onClick={() => logOut()}>Logout</button>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        </ul>
                    </div> : <div><Link className="m-2" to="/Login">Login</Link>
                        <Link className="m-2" to="/Register">Register</Link> </div>}
                    {/* profile end */}
                </div>
            </div>
            {/*  */}
        </div>
    );
};
export default Navber;