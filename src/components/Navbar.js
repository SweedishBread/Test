import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="bg-darkerNavbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-darkText text-lg font-semibold">
          Ence
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-darkText font-semibold">
                Plugins
              </Link>
              <Link to="/commands" className="text-darkText font-semibold">
                Modules
              </Link>
              <Link to="/settings" className="text-darkText font-semibold">
                Settings
              </Link>
              <button onClick={onLogout} className="text-darkText font-semibold">
                Logout
              </button>
            </>
          ) : (
            <a href="/auth/discord" className="text-darkText font-semibold">
              Sign In
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
