import React, { useState, FC } from 'react';
import { Footer } from '../Component/Footer';
import { Navbar } from '../Component/Navbar';
import Products from './Products';
import Users from './Users';

const Dashboard: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5 bg-gray-800 h-screen">
          <ul className="text-white font-medium p-6">
            <li className="mb-3">
              <button
                onClick={() => setShow(true)}
                className="w-full py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
              >
                Products
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setShow(false)}
                className="w-full py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
              >
                Users
              </button>
            </li>
          </ul>
        </div>
        <div className="ml-10 w-4/5 h-screen">
          {show ? <Products /> : <Users />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

