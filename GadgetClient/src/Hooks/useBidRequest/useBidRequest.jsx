
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useBidRequest() {
  const { user } = useAuth();
  const { data:booking=[], isError, error } = useQuery({
    queryFn: () => getData(),
    queryKey: ["booking"]
  })
  // console.log() 
  const axiosSecure = useAxiosSecure();
  if(error,isError){
    console.log(error)
  }
  const getData = async () => {
    const { data } = await axiosSecure(`/booking/${user?.email}`);
    return data
  }
  // if(isLoading)return <p className="text-5xl text-center">Loading</p>
  return booking
}