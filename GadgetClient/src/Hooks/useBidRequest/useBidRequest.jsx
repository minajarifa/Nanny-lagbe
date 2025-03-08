import axios from "axios"
import { useEffect, useState } from "react"
import useAuth from "../useAuth/useAuth";

export default function useBidRequest() {
  const{user}=useAuth();
  const [booking, setBooking] = useState();
  useEffect(() => {
    getData()
  }, [user])
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`);
    setBooking(data);
  }
  return booking
}
