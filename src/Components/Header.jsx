import React from 'react';
import Button from './Button'; // Make sure to import the Button component

function Header() {
  return (
    <div className="w-full sm:w-[540px] h-[421px] mt-8 sm:mt-56 ml-4 sm:ml-36 px-4 py-12 text-left ">
      <h1 className="font-roboto font-medium text-3xl sm:text-4xl lg:text-5xl leading-[48px] sm:leading-[66px] tracking-[1px] mb-[12px] w-full sm:w-[539px] h-[132px] text-custom-textBlue">
        Introduce Your Product Quickly & Effectively
      </h1>

      <div>
        <p className="w-full sm:w-[539px] h-[164px] opacity-100 text-custom-blue text-lg sm:text-xl font-normal leading-[30px] text-left font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
     
      <div className="mt-4 space-x-2">
        <Button className="bg-blue-900 text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 w-[189.13px] h-[36px] sm:h-[44px] top-[688px] left-[163.12px] sm:left-[382.27px] opacity-100 hover:bg-blue-200">
          Purchase UI Kit
        </Button>

        <Button className="bg-transparent text-blue-500 text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 w-[189.13px] h-[36px] sm:h-[44px] top-[688px] left-[382.27px] sm:left-auto opacity-100 rounded hover:bg-gray-200">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default Header;


