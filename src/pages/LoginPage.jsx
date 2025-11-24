import React from "react";
import "../style/Login.css";
import logo from "../assets/images/logo.png";
import pic from "../assets/images/picLogin.png";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <img src={logo} className="login-img" style={{ width: "80px", height: "80px", borderRadius: "5px" }} />
        <span className="material-symbols-outlined text-xl">SunTrackers</span>
        <div>
          <img
            src={pic}
            alt="visual"
            style={{ width: "500px", height: "500px", borderRadius: "10px" }}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="login-right">
        <div className="login-form">
        {/* Right Side Login Form */}
          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-md flex flex-col justify-center">
              <h1 className="text-4xl font-semibold mb-2">Welcome Back</h1>
              <p className="text-gray-600 mb-10">
                Sign in to access your personalized dashboard.
              </p>

              {/* Email */}
              <label className="font-medium text-gray-700">Email Address</label>
              <div className="relative mt-1 mb-6">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-lg py-3 pl-12 pr-4 focus:outline-blue-500"
                />
              </div>

              {/* Password */}
              <label className="font-medium text-gray-700">Password</label>
              <div className="relative mt-1 mb-4">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border rounded-lg py-3 pl-12 pr-12 focus:outline-blue-500"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  visibility_off
                </span>
              </div>

              {/* Remember + Forgot */}
              <div className="flex justify-between items-center mb-8">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" /> Remember me
                </label>
                <button className="text-sm text-gray-600 hover:underline">
                  Forgot Password?
                </button>
              </div>

              <button className="w-full bg-[#1f2937] text-white py-3 rounded-lg text-lg font-medium hover:opacity-90">
                Sign In
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Access is based on your assigned role.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-8 text-sm text-gray-500 mt-6">
          <button>Contact Support</button>
          <button>Terms of Service</button>
          <button>Privacy Policy</button>
        </div>

        </div>

    </div>
    
  );
}
