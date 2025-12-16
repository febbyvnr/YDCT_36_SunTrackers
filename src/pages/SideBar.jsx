import { useNavigate, useLocation } from "react-router-dom";

import "../style/SideBar.css";
import profile from "../assets/images/profile.jpeg";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="sideBar-container">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2">
          <div className="user-profile flex items-center gap-3">
            <img src={profile} className="profile-img"/>
            Alex Green
            <h5 className="user-rank">Project Manager</h5>
          </div>
        </div>

        <nav className="logo-side-bar flex flex-col gap-2 mt-4">
          <p onClick={() => navigate("/")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">dashboard</span>Dashboard</p>
          <p onClick={() => navigate("/mapView")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">map</span>Map View</p>
          <p onClick={() => navigate("/analytics")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">analytics</span>Analytics</p>
          <p onClick={() => navigate("/addPanel")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">solar_power</span>Add Panel</p>
          <p onClick={() => navigate("/myPanels")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">solar_power</span>My Panels</p>
          <p onClick={() => navigate("/settings")} style={{ cursor: "pointer", background: "transparent" }}><span className="material-icons">settings</span>Settings</p>
        </nav>
      </div>

      <div className="logo-side-bar flex flex-col gap-1">
        <p><span className="material-icons">help</span>Help</p>
        <p><span className="material-icons">logout</span>Logout</p>
      </div>
    </aside>
  );
}