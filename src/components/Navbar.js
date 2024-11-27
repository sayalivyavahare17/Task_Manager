import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300">
        Task Manager
      </Link>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-white">{`Hello, ${user.email}`}</span>
            <button 
              className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
