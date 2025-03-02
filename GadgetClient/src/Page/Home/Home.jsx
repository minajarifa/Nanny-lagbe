// import Banner from "../../ExtraComponents/Banner";
import useAuth from "../../Hooks/useAuth/useAuth";

const Home = () => {
const {user}=useAuth();
console.log(user)
    return (
        <div>
            {/* <Banner/> */}
            <h1 className="text-4xl">{user?.displayName}</h1>
            <h1 className="text-4xl">{user?.email}</h1>
        </div>
    );
};

export default Home;