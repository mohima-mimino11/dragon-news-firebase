import React from 'react';
import { FaGithub, FaGoogle, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const RightNav = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* login section */}
      <h3 className="text-xl font-semibold mb-3">Login With</h3>
      <div className='flex flex-col gap-2 *:w-full'>
        <button className='btn bg-base-100'>
            <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className='btn bg-base-100'>
            <FaGithub></FaGithub> Login With Github
        </button>
      </div>
      {/* find us section */}
      <div className='space-y-5'>
        <h3 className="text-xl font-semibold text-[#403F3F]">Find Us On</h3>
        <div className='flex flex-col *:w-full'>
        <button className='btn justify-start bg-base-100'>
            <FaFacebook></FaFacebook> Facebook
        </button>
        <button className='btn justify-start bg-base-100'>
            <FaTwitter></FaTwitter> Twitter
        </button>
        <button className='btn justify-start bg-base-100'>
            <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
      </div>
    </div>
  );
};

export default RightNav;