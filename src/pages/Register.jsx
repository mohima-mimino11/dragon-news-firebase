import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
  const {createUser, setUser, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState("");
  // form data get and user setting
  const handleSubmitRegister = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    if(name.length < 5){
      setError("Name Must be 5 characters Long")
    }
    createUser(email, password)
      .then(result =>{
        const user=result.user;
        setUser(user);
        updateUserProfile({displayName: name, photoURL: photo })
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.code, err.message);
        
      });
    
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10">
        <h2 className="text-3xl font-semibold">Register your account</h2>
        <form onSubmit={handleSubmitRegister} className="card-body">
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error && <label className="label">
            <span className="label-text text-red-500">{error}</span>
          </label>
          }
          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photourl"
              className="input input-bordered"
              required
            />
          </div>
          {/* email input */}
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral w-full">Register</button>
          </div>
        </form>
        <p className="text-base font-semibold text-[#706F6F]">Already Have an Account? 
          <Link className="text-red-500" to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;