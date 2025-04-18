import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10">
        <h2 className="text-3xl font-semibold">Login your account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral w-full">Login</button>
          </div>
        </form>
        <p className="text-base font-semibold text-[#706F6F]">Don't Have an Account? 
          <Link className="text-red-500" to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
