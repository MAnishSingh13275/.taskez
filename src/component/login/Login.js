import React from "react";
import "./Login.css";
import Group from "../../assets/Group.png";
const Login = (props) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="left">
        <img src={Group} alt="" />
      </div>
      <div className="right">
        <div className="header">
          <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
          <span>/</span>
          <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
        </div>
        <div className="Container">
          <div className="loginContainer">
            {hasAccount ? (
              <></>
            ) : (
              <>
                {" "}
                <input
                  placeholder="Full Name"
                  type="text"
                  autoFocus
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}
            <input
              placeholder="Email"
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <input
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
          </div>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Log in</button>
                <p>
                  Don't have an account ?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup}>Sign up</button>
                <p>
                  Have an account?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
