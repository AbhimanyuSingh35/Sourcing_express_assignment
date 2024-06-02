import React from 'react';

function Nav() {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex space-x-4 ml-4 group-links">
        <a href="#" className="block py-2 px-4 text-custom-blue rounded hover:bg-gray-100">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-custom-blue rounded hover:bg-gray-100">
          About
        </a>
        <a href="#" className="block py-2 px-4 text-custom-blue rounded hover:bg-gray-100">
          Contact
        </a>
      </div>
      <div className="flex-1 text-center">
        <span className="text-4xl font-semibold text-custom-darkBlue text-gray-700">Landing</span>
      </div>
      <div className="flex space-x-4 mr-4 ">
        <a href="#" className="block py-2 px-20 text-white rounded bg-blue-900 hover:bg-blue-200">
          Buy Now
        </a>
      </div>
    </nav>
  );
}

export default Nav;




