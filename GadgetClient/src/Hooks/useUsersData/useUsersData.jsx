
import useAuth from "../useAuth/useAuth"
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


export default function useUsersData() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userData = [], error, isError } = useQuery({
    queryFn: () => getData(),
    queryKey: ["nanny", user?.email],
  })
  if (error, isError) {
    console.log(error)
    console.log(isError)
  }
  const getData = async () => {
    const { data } = await axiosSecure(`/usersData/${user?.email}`);
    return data;
  }

  return userData;
}