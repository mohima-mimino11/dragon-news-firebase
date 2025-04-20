import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  
  // form data get and user setting
  const handleSubmitLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    userLogin(email, password)
      .then(result=>{
        setUser(result.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.code);
      });
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10">
        <h2 className="text-3xl font-semibold">Login your account</h2>
        <form onSubmit={handleSubmitLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error && <label className="label">
              <span className="label-text text-red-500">{error}</span>
            </label>
            }
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
