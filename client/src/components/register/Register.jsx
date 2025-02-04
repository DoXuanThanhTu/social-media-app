import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social App</h3>
          <span className="registerDesc">
            Connect with friends and the world
          </span>
          <span className="registerDesc"> around you on Social App</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />

            <input placeholder="Email" className="registerInput" />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="registerInput"
            />
            <button className="registerButton">Sign In</button>
            <button className="registerRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
