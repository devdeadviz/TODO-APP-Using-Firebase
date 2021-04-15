import "./App.css";
import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    sighInWithGoogle,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn-signIn" onClick={handleLogin}>
                Sign In
              </button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button className="btn-signUp" onClick={handleSignUp}>
                Sign Up
              </button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
              <button
                className="button-signInWithGoogle"
                onClick={sighInWithGoogle}
              >
                Sign In With Google
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
