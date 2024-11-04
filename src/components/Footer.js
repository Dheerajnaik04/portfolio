import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Dheeraj Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
