import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`flex justify-between items-center p-5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>N S DHEERAJ <h3> full stack developer</h3></h1>
      <div>
        <button
          onClick={toggleDarkMode}
          className={`py-2 px-4 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
