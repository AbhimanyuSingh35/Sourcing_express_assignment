// TextContent.jsx
import React from 'react';

function TextContent() {
  return (
    <div className="flex flex-col items-start justify-center w-[540px] h-[204px]">
     <h2 className="text-3xl font-medium text-[#091133] font-roboto text-left w-96 h-12">Light, Fast & Powerful</h2>
      <p className="font-roboto text-base  font-normal leading-[26px] text-left text-[#6F7CB2] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      </p>
    </div>
  );
}

export default TextContent;