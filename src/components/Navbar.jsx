import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <div className='flex justify-between items-center mt-5'>
      <div>{user && user.email}</div>
      <div className='text-lg text-[#706F6F] space-x-2'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
      </div>
      <div className='flex gap-2'>
        {
          user && user?.email ? <div>
            <img className='w-10 rounded-md' src={user?.photoURL} alt="" />
            <p className="text-sm">{user?.displayName}</p>
          </div>
          : <img src={userIcon} className='w-[41px]' alt="" />
        }
        
        {user?.email ? <button onClick={logout} className='btn btn-neutral text-white text-xl'>Logout</button> 
        : <Link to="/auth/login" className='btn btn-neutral text-white text-xl'>Login</Link>}
        
      </div>
    </div>
  );
};

export default Navbar;