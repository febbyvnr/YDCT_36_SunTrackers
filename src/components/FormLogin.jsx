import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      toast.error("Email and Password cannot be empty!");
      return;
    }

    // contoh validasi
    if (user.email !== "admin@gmail.com" || user.password !== "admin123") {
      toast.error("Invalid email or password!");
      return;
    }

    // simpan user
    const newUser = {
      ...user,
      loginAt: new Date(),
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Login success!");

    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col mt-4">

      {/* Email */}
      <label className="form-label">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        className="form-input"
        onChange={handleChange}
      />

      {/* Password */}
      <label className="form-label mt-3">Password</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          className="form-input"
          onChange={handleChange}
        />
        <span
          className="password-toggle"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {/* extras */}
      <div className="extras">
        <label className="remember">
          <input type="checkbox" /> Remember me
        </label>

        <button className="forgot" type="button">Forgot Password?</button>
      </div>

      {/* Button */}
      <button type="submit" className="btn-login mt-4">
        Sign In
      </button>

      <p className="form-note">Access is based on your assigned role.</p>
    </form>
  );
}
