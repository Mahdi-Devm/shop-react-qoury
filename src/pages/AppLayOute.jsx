import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";

function AppLayOute() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default AppLayOute;
