import React from 'react';
// Update with the correct path to your image

const Header = () => {
  return (
    <header className="text-center py-48 h-196 bg-gradient-to-r from-blue-600 to-teal-400 text-white flex items-center justify-center relative"> 
      {/* Add 'flex', 'items-center', 'justify-center', and 'relative' for positioning */}

 

      <div> {/* Wrap content in a div for better layout */}
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">I'm a passionate developer with skills in various technologies.</p>
        <a
          href="https://drive.google.com/drive/folders/1NK9USWlYUPIhwpcFMosQ3fmmAKc0bl6C?usp=drive_link"
          download
          className="mt-8 inline-block bg-white text-blue-500 py-2 px-4 rounded"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
