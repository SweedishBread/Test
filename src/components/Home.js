// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-10 text-center bg-353635">
      <h1 className="text-3xl font-semibold text-darkText mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/dashboard">
          <div className="bg-grey p-6 rounded-lg shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold text-darkText mb-4">Plugins</h2>
            <p className="text-darkText font-semibold">Big and powerful features</p>
          </div>
        </Link>

        <Link to="/commands">
          <div className="bg-grey p-6 rounded-lg shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold text-darkText mb-4">Modules</h2>
            <p className="text-darkText font-semibold">Muiltiple commands put into one catagory</p>
          </div>
        </Link>

        <Link to="/settings">
          <div className="bg-grey p-6 rounded-lg shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold text-darkText mb-4">Settings</h2>
            <p className="text-darkText font-semibold">Configure your bot's personallity</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
