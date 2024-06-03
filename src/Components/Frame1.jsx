// Frame1.jsx
import React from 'react';
import TextContent from './TextContent'; // Import the TextContent component
import Card from './Card';
import placeHolderImage from '../assets/frame1.svg'

function Frame1() {
  return (
    <div className="w-full h-[742px] py-16">
      <section className="flex items-center justify-between w-full px-4 py-16 bg-white rounded-lg">
        <div className="w-1/2 pl-36">
          <TextContent /> {/* Use the TextContent component */}
          <div className="flex justify-between">
            <Card/>
            <Card/>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={placeHolderImage} alt="Features" className="ml-4 pr-36" />
        </div>
      </section>
    </div>
  );
}

export default Frame1;

