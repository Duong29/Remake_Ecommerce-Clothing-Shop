import React from "react";

export default function Login() {
  return (
    <div className="row justify-content-center align-items-start">
      <div className="login-form" style={{ width: "500px" }}>
        <h2>Login to your account</h2>
        <form>
          <input type="text" className="form-control mb-2" placeholder="Name" />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-warning w-100">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
