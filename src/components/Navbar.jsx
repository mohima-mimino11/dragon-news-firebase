import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-5'>
      <div></div>
      <div className='text-lg text-[#706F6F] space-x-2'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
      </div>
      <div className='flex gap-2'>
        <img src={userIcon} className='w-[41px]' alt="" />
        <button className='btn btn-neutral text-white text-xl'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;