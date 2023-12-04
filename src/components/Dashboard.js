// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-darkText text-3xl font-semibold mb-6">Dashboard</h1>

      {/* Example Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-darkText font-semibold mb-4">Roblox</h2>
          <p className="text-darkText font-semibold">Your bot is currently online.</p>
        </div>

        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-darkText font-semibold mb-4">Minecraft</h2>
          <p className="text-darkText font-semibold">Total servers: 100</p>
          <p className="text-darkText font-semibold">Active users: 5000</p>
        </div>

        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-darkText font-semibold mb-4">Anti-Alt</h2>
          <ul className="list-disc list-inside text-darkText font-semibold">
            <li>Prevent spamming and hacking with anti-alt</li>
            {/* Add more commands */}
          </ul>
        </div>

        {/* New Component: Discord Stats */}
        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-darkText font-semibold mb-4">Discord Stats</h2>
          <p className="text-darkText font-semibold">Total members: 500</p>
          <p className="text-darkText font-semibold">Online members: 100</p>
        </div>

        {/* New Component: Server Status */}
        <div className="bg-grey p-6 rounded-lg shadow-md">
          <h2 className="text-darkText font-semibold mb-4">Server Status</h2>
          <p className="text-darkText font-semibold">Server 1: Online</p>
          <p className="text-darkText font-semibold">Server 2: Offline</p>
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
