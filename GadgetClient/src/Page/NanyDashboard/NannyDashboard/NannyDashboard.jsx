import { Outlet } from "react-router-dom";
import Sideber from "../../Navber/Sideber";

export default function NannyDashboard() {
  return (
    <div>
        <Sideber/>
        <Outlet/>
    </div>
  )
}
