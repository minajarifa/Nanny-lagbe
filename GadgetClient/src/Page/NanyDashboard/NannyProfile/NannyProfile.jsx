import useUsersData from "../../../Hooks/useUsersData/useUsersData";
export default function NannyProfile() {
  
  const userData = useUsersData();
  return (
    <div className="ml-10">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={userData?.photo} alt="avatar" />
        <div className="py-5 text-center">
          <a className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Name : {userData?.name}</a>
          <span className="text-sm text-gray-700 dark:text-gray-200">Email : {userData?.email}</span><br />
          <span className="text-sm text-gray-700 dark:text-gray-200">User Type : {userData?.role}</span>
        </div>
      </div>
    </div>
  )
}