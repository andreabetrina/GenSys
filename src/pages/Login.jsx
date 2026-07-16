import "../styles/login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/logo.png";

// Allowed Gmail IDs
const allowedUsers = [
  "andreabetrina06@gmail.com",
];

function Login() {

  const handleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential);

    console.log(user);

    // Check if the email is allowed
    if (allowedUsers.includes(user.email)) {
      alert(`Welcome ${user.name}`);

      // Later you can redirect to another page
      // Example:
      // navigate("/dashboard");

    } else {
      alert("❌ Access Denied!\nYou are not authorized to access GenLab.");
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="login-container">

      {/* Background Glow */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* Header */}
      <div className="top-bar">
      </div>

      {/* Glass Container */}
      <div className="login-wrapper">

        {/* Left Section */}
        <div className="left-section">

          <h1>
            Gen<span>Lab</span>
          </h1>

          <div className="line">
            <span>✦</span>
          </div>

          <h2 className="tagline">
            World's First Gen Z & AI
            <br />
            <span>Creative Powerhouse</span>
          </h2>

          <p className="description">
            A collaborative launchpad where Gen Z creators and AI innovators
            build, create and scale the future.
          </p>

          <div className="chips">
            <span>Launchpad</span>
            <span>AI Forge</span>
            <span>Brand Studio</span>
          </div>

          <div className="bottom-logo">
            <img src={logo} alt="GenLab Logo" />
          </div>

        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="circle-logo">
            <img src={logo} alt="GenLab Logo" />
          </div>

          <h2>Welcome Back</h2>

          <p>
            Sign in with your Google account
            <br />
            to continue.
          </p>

          <div className="small-star">✦</div>

          <div className="google-button">

            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              theme="outline"
              size="large"
              shape="pill"
              text="continue_with"
              width="350"
            />

        </div>

      </div>

      <div className="right-spacer"></div>

    </div>

  </div>
  );
}

export default Login;