import { Outlet } from "react-router-dom";
import Sideber from "../../Navber/Sideber";

export default function NannyDashboard() {
  return (
    <div className="flex ">
      <div className="top-0 left-0 w-64 h-screen">
        <Sideber/>
      </div>
        <div className="w-full m-20">
        <Outlet/>
        </div>
    </div>
  )
}
