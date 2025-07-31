import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">MERN Blog</Link>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/create">Create Post</Link>
            <button className='cursor-pointer' onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link className='cursor-pointer' to="/login">Login</Link>
            <Link className='cursor-pointer' to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
