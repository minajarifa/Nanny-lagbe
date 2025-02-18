import { useEffect, useState } from "react"
import useAuth from "../../../Hooks/useAuth/useAuth"
import axios from 'axios';
export default function NannyProfile() {
  const [userData,setUserData]=useState()
  const { user } = useAuth()
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/usersData/${user?.email}`);
    setUserData(data)
  }
  
  console.log(userData)
  return (
    <div className="ml-10">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={user?.photoURL} alt="avatar" />

        <div className="py-5 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Name: {user?.displayName}</a>
          <span className="text-sm text-gray-700 dark:text-gray-200">Email: {user?.email}</span><br />
          <span className="text-sm text-gray-700 dark:text-gray-200">User Type: {userData?.role}</span>
        </div>
      </div>
    </div>
  )
}