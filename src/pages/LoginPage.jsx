import "../style/Login.css";
import logo from "../assets/images/logo.png";
import pic from "../assets/images/picLogin.png";
import FormLogin from "../components/FormLogin";

export default function LoginPage() {
  return (
    <div className="login-container">

      {/* Left side */}
      <div className="login-left">
        <div className="left-header">
          <img src={logo} className="logo" alt="logo"/>
          <span className="logo-title">SunTrackers</span>
        </div>
         <img src={pic} alt="visual" className="login-illustration" />

      </div>

      {/* Right side */}
      <div className="login-right">
        <div className="login-form">

          <h1 className="form-title">Welcome Back</h1>
          <p className="form-subtitle">Sign in to access your personalized dashboard.</p>

          {/* Email */}
          <label className="form-label">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="form-input"
          />

          {/* Password */}
          <label className="form-label">Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
            />
            {/* icon to hide/show pass */}
          </div>

          <div className="extras">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>

            <button className="forgot">Forgot Password?</button>
          </div>

          <button className="btn-login">Sign In</button>

          <p className="form-note">Access is based on your assigned role.</p>
        </div>
      </div>

    </div>
  );
}