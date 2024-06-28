import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://scratch.mit.edu/static/assets/90fb0caa5319c39b24946476dd32bb0d.svg"
          alt="Scratch Logo"
          className="h-10 mr-4"
        />
        <h1 className="text-2xl font-bold">Scratch Clone</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
