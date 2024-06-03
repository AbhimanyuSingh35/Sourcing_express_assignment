import React from "react";
import Button from "./Button";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-8 py-8 text-center bg-[#E7ECFF] text-white">
      <div className="flex justify-between items-center w-full max-w-[1440px] px-36 mx-auto">
           <p className="text-sm text-[#939EA4]">&copy;2023 Yourcompany</p>
          <h2 className="text-3xl font-roboto font-semibold text-center text-[#37447E]">Landing</h2>
           <Button className="bg-blue-900 text-white px-4 py-2">Purchase Now</Button>
      </div>
      <div className="flex-grow"></div>
      <div className="w-[1110px] h-[1px] border-b border-black mt-4"></div>
    
      <div className="flex justify-between items-center w-full max-w-[1440px] mt-4 px-36 mx-auto">
        <div className="flex space-x-4 ml-1">
          <a href="#" className="block py-2 pr-4 pl-3 text-[#929ECC] rounded hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block py-2 pr-4 pl-3 text-[#929ECC] rounded hover:text-blue-500">
            About
          </a>
          <a href="#" className="block py-2 pr-4 pl-3 text-[#929ECC] rounded hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <FacebookIcon className="text-gray-400 hover:text-blue-900" />
          <LinkedinIcon className="text-gray-400 hover:text-blue-900" />
          <TwitterIcon className="text-gray-400 hover:text-blue-900" />
          <InstagramIcon className="text-gray-400 hover:text-blue-900" />
        </div>
      </div>
    </footer>
  );
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default Footer;
