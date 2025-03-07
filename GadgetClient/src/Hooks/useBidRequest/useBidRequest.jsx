import axios from "axios"
import { useEffect, useState } from "react"

export default function useBidRequest() {
  const [booking, setBooking] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/booking`);
      setBooking(data)
    }
    getData()
  }, [])
  return booking
}
