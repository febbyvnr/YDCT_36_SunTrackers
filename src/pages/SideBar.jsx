// src/components/SideBar.jsx
import React from "react";

import "../style/SideBar.css";

import profile from "../assets/images/profile.jpeg";

export default function SideBar() {
  return (
    <aside className="sideBar-container">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0_gZAH7V9UITCUT7YF-DubaEVM1PxJOpWKbv-2Do9qU2JBd8t4je-gLzyizJboVgwzyQLUkQ6zW5F5OB5B978cxfHiu5JAqF1J1XvL_LqrpGzXIrl80j013r7Qi_9Ofg74rlp_0hOb_YXLx7iXAJjpEOQS-w5QK2nRmghD7fmjilB6PqWgJn2rl_u8PipA9LsRZD--AbwbNv8A16X1blDz1aDZfLP7cZh7gfoqeBmnRWqYtMnKCTinmjUv3LzGzFuyy5GBCjifWs")`
            }}
          ></div>

          <div className="flex flex-col">
            <h1 className="user-profile">
                <img src={profile} className="profile-img"/>
                Alex Green
                <p className="user-rank">Project Manager</p>
            </h1>
          </div>
        </div>

        <nav className="logo-side-bar flex flex-col gap-2 mt-4">
          <span className="material-icons">dashboard</span><p>Dashboard</p>
          <span className="material-icons">folder</span><p>Projects</p>
          <span className="material-icons">analytics</span><p>Analytics</p>
          <span className="material-icons">solar_power</span><p>Add Panel</p>
          <span className="material-icons">settings</span><p>Settings</p>
        </nav>
      </div>

      <div className="logo-side-bar flex flex-col gap-1">
        <span className="material-icons">help</span><p>Help</p>
        <span className="material-icons">logout</span><p>Logout</p>
      </div>
    </aside>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <a
      className={`flex items-center gap-3 px-3 py-2 rounded-lg
        ${
          active
            ? "bg-primary/20 dark:bg-[#23482f] text-primary dark:text-white"
            : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary/10"
        }`}
      href="#"
    >
      <span
        className="material-symbols-outlined"
        style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
      >
        {icon}
      </span>
      <p className="text-sm font-medium">{text}</p>
    </a>
  );
}
