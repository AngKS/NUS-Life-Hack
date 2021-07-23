import React from "react";
import "./Login.css";

function Login(props) {
  const { children, className } = props;

  return (
    <div className={`login-button-1 smart-layers-pointers ${className  ? className : "" || ""}`}>
      <div className="login-1 rigsans-semi-bold-white-30px">{children ? children : ""}</div>
    </div>
  );
}

export default Login;
