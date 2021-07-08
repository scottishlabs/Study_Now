import React from "react";
import SignInForm from "./SignInForm";
import "./SignIn.css";

const SignInArea = () => {
  return (
    <div
      className="container w-100"
      style={{ height: "100vh", padding: "8rem 0" }}
    >
      <div
        className="jumbotron bg-white text-center h-100 border border-transparent shadow"
        style={{ borderRadius: "10px" }}
      >
        <div className="row h-100">
          <div className="d-none d-lg-block col-lg-7 order-2 order-lg-1 vl" />
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInArea;
