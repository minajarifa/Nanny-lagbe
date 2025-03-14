import { useEffect, useState } from "react"
import useAuth from "../useAuth/useAuth"
import useAxiosSecure from "../useAxiosSecure";


export default function useUsersData() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/usersData/${user?.email}`);
      setUserData(data);
    }
    getData();
  }, [user]);
  return userData;
}