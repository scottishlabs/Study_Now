import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container d-flex" style={{ height: "75vh" }}>
      <div className="container-fluid m-auto">
        <h1 style={{ fontWeight: "900", fontSize: "6rem" }}>Page Not Found!</h1>
        <h2 className="my-5">The page you are looking for does not exist</h2>
        <Link to="/" className="btn btn-primary">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
