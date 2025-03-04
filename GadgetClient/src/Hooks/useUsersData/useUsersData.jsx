import { useEffect, useState } from "react"
import useAuth from "../useAuth/useAuth"
import axios from "axios"


export default function useUsersData() {
    const [userData,setUserData]=useState()
    const { user } = useAuth()
    useEffect(() => {
      getData()
    }, [])
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/usersData/${user?.email}`);
      setUserData(data); 
    }
  return userData
}
