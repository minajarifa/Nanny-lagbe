import { useEffect, useState } from "react"
import useAuth from "../useAuth/useAuth"
import axios from "axios"


export default function useUsersData() {
  const { user } = useAuth()
  const [userData, setUserData] = useState()
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/usersData/${user?.email}`);
      setUserData(data);
    }
    getData()
  }, [user?.email])
  return userData;
}