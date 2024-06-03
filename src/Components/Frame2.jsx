import React from "react";
import TextContent from "./TextContent";

function Frame2({image}){
    return (
      <div className="w-full h-[569px] mt-8 ">
      <section className="flex items-center justify-between w-full px-4 py-16 bg-white rounded-lg">
        <div className="w-1/2 flex justify-start">
          <img src={image} alt="Features" className="mr-4 pl-32 w-480 h-315" />
        </div>
        <div className="w-1/2 pr-36">
          <TextContent />
        </div>
      </section>
    </div>
    )
}
export default Frame2;