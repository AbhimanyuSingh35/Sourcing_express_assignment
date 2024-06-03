import React from "react";
import TextContent from "./TextContent";
import Button from "./Button"; // Import the Button component

function Frame3({ image }) {
  return (
    <div className="w-full h-[569px]">
      <section className="flex items-center justify-between w-full px-4 py-16 bg-white rounded-lg">
        <div className="w-1/2 flex justify-start">
          <img src={image} alt="Features" className="mr-4 pl-32 w-480 h-315" />
        </div>
        <div className="w-1/2 pr-36">
          <TextContent />
          <Button className="bg-blue-900 text-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 w-[189.13px] h-[36px] sm:h-[44px] opacity-100 ">
            Purchase Now
          </Button>
        </div>
      </section>
    </div>
  );
}
export default Frame3;
