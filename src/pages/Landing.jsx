import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#001f3f] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BrandName</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-white to-blue-100 flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to Our Landing Page
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Build your dreams with us. Start now and explore endless possibilities.
          </p>
          <Link
            to="/get-started"
            className="bg-[#001f3f] text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white text-center py-4">
        <p>© 2025 BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
